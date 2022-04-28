import { PrismaClient, Question, Prisma } from "@prisma/client";
import QuestionWithVariants from "../models/question.model";
import { Variant } from "../models/variant.model";

export default class QuestionService {
    
    constructor(private prisma: PrismaClient) { }

    async createMany(complexId: number, questions: QuestionWithVariants[]) {
        
        return new Promise(async (resolve, reject) => {
            
            let array: QuestionWithVariants[] = [];
            try {
                for (const question of questions) {
                    question.complexId = complexId;
                    let newQuestion = await this.createOne(question);
                    array.push(newQuestion);
                }
                resolve(array);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    private createVariants(questionId: number, variants: Variant[]) {
        return this.prisma.variant.createMany({
            data: variants.map(variant => {
                return {
                    questionId: questionId,
                    text: variant.text,
                    isCorrect: variant.isCorrect
                }
            })
        })
    }

    updateMany(complexId: number, questions: Question[]) {
        return this.prisma.question.updateMany({
            where: {
                complexId: complexId
            },
            data: questions.map(question => {
                return {
                    text: question.text,
                }
            })
        });
    }

    async findAll(complexId: number) {
        return await this.prisma.question.findMany({
            where: {
                complexId: complexId
            },
            include: {
                variants: true
            }
        });
    }

    async createOne(question: QuestionWithVariants): Promise<QuestionWithVariants> {
        return await this.prisma.question.create({
            data: {
                text: question.text,
                complexId: question.complexId,
                variants: {
                    createMany: {
                        data: question.variants.map(variant => {
                            return {
                                text: variant.text,
                                isCorrect: variant.isCorrect
                            }
                        })
                    } 
                }
            },
            include: {
                variants: true
            }
        });
    }

    async updateOne(question: Question) {
        return await this.prisma.question.update({
            where: {
                id: question.id
            },
            data: {
                text: question.text,
            }
        });
    }

    async deleteOne(questionId: number) {
        return await this.prisma.question.delete({
            where: {
                id: questionId
            },
            include: {
                variants: true
            }
        });
    }

    async deleteMany(ids: number[]) {
        for(let id of ids) {
            await this.prisma.question.delete({
                where: {
                    id: id
                }
            });
        }
    }
}
import { PrismaClient,  } from "@prisma/client";
import Question from "../models/question.model";
import { Variant } from "../models/variant.model";

export default class QuestionService {
    updateQuestionsBySet(setId: number, questions: Question[]) {
        return this.prisma.question.updateMany({
            where: {
                setId: setId
            },
            data: questions.map(question => {
                return {
                    text: question.text,
                }
            })
        });
    }
    
    addVariants(questionId: number, variants: Variant[]) {
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

    async addQuestionsBySet(setId: number, questions: Question[]) {
        return new Promise(async (resolve, reject) => {
            let array: Question[] = [];
            try {
                for (const question of questions) {
                    question.setId = setId;
                    let newQuestion = await this.createQuestion(question);
                    array.push(newQuestion as Question);
                }
                resolve(array);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    constructor(private prisma: PrismaClient) { }

    async getQuestions(setId: number) {
        return await this.prisma.question.findMany({
            where: {
                setId: setId
            },
            include: {
                variants: true
            }
        });
    }

    async getQuestion(questionId: number) {
        return await this.prisma.question.findUnique({
            where: {
                id: questionId
            },
            include: {
                variants: true
            }
        });
    }

    async createQuestion(question: Question) {
        return await this.prisma.question.create({
            data: {
                text: question.text,
                setId: question.setId,
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
            }
        });
    }

    async updateQuestion(question: Question) {
        return await this.prisma.question.update({
            where: {
                id: question.id
            },
            data: {
                text: question.text,
            }
        });
    }

    async deleteQuestion(questionId: number) {
        return await this.prisma.question.delete({
            where: {
                id: questionId
            },
            include: {
                variants: true
            }
        });
    }

    async deleteQuestionsBySet(setId: number) {
        return await this.prisma.question.deleteMany({
            where: {
                setId: setId
            }
        });
    }
}
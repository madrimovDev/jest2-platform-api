import QuestionWithVariants from "./question.model";

export default class ComplexWithQuestions {
    constructor(
        public id: number,
        public name: string,
        public path: string,
        public userId: number,
        public time: Date,
        public questions: QuestionWithVariants[],
    ) { }
}
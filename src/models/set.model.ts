import Question from "./question.model";

export default class Set {
    constructor(
        public id: number,
        public name: string,
        public userId: number,
        public questions: Question[],
    ) { }
}
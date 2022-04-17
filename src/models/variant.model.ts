export class Variant {
    constructor(
        public id: number,
        public text: string,
        public isCorrect: boolean,
        public questionId: number
    ) { }
}
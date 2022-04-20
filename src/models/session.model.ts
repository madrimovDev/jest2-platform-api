import ComplexWithQuestions from "./complex.model";

export default class SessionWithComplex {
    constructor(
        public id: number,
        public user: string,
        public path: string,
        public complexId: number,
        public startTime: Date,
        public endTime: Date,
        public completed: boolean,
        public complex: ComplexWithQuestions,
        public expired: boolean | undefined,
        public remainingTime: number | undefined,
    ) { }
}
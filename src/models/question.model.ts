import { Variant } from "./variant.model";

export default class Question {
    constructor(
        public id: number,
        public text: string,
        public variants: Variant[],
        public setId: number
    ) { }
}
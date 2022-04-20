import { Variant } from "./variant.model";

export default class QuestionWithVariants {
    constructor(
        public id: number,
        public text: string,
        public variants: Variant[],
        public complexId: number
    ) { }
}
import { Ingredient } from "./ingredient";

export interface Recipe {

    readonly id: number,
    readonly title: string,
    readonly Author: string,
    readonly image: string,
    readonly note: string,
    readonly preparation: string,
    readonly ingredients: Array<Ingredient>
}
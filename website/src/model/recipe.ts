import { ingredients } from "./ingredient";

export interface recpie {

    readonly id: number,
    readonly title: string,
    readonly Author: string,
    readonly image: string,
    readonly note: string,
    readonly preparation: string,
    readonly ingredients: ingredients[]
}
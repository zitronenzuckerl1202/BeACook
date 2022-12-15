import { BehaviorSubject } from "rxjs"
import { Recipe } from "./recipe"
import { Ingredient } from "./ingredient"

interface Model {
    readonly recipes: Array<Recipe>
    readonly currentrecipeid?: number
}

const initialState: Model = {
    recipes: new Array<Recipe>
}

const store = new BehaviorSubject<Model>(initialState)
export default store
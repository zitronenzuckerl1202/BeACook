import { BehaviorSubject } from "rxjs"
import { Recipe } from "./recipe"
import { Ingredient } from "./ingredient"

interface Model {
    readonly recipes: Array<Recipe>
}

const initialState: Model = {

    recipes: new Array<Recipe>
}

const storage = new BehaviorSubject<Model>(initialState)
export default storage
import produce from "immer"
import store from "./model/store"

const RECIPE_URL = "http://localhost:5000/recipes?_embed=ingredients"

class RecipeService{
    async fetchAll() {
        const response = await fetch(RECIPE_URL)
        const recipes = await response.json()
        let nextState = produce(store.getValue(), draft => {
            draft.recipes = recipes
        })
        store.next(nextState)
    }
}

const recipeService = new RecipeService()
export default recipeService
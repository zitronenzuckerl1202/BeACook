import { Recipe } from "./model/recipe"

const RECIPE_URL = "http://localhost:5000/recipes"

class RecipeService{
    async fetchAll(): Promise<[Recipe]> {
        const response = await fetch(RECIPE_URL)
        const recipes = await response.json()
        return recipes
    }
}

const recipeService = new RecipeService()
export default recipeService
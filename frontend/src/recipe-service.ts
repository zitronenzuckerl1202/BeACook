import produce from "immer"
import store from "./model/store"

const RECIPE_URL = "http://localhost:5000/recipes?_embed=ingredients"
const BASE_URL = "http://localhost:5000/"

class RecipeService{

    async fetchAll() {
        const response = await fetch(RECIPE_URL)
        const recipes = await response.json()
        let nextState = produce(store.getValue(), draft => {
            draft.recipes = recipes
        })
        store.next(nextState)
    }

    // Recipe hinzufügen
    async addRecipe(inputTitle: string, inputAuthor: string, inputImage: string, inputNote: string, inputPreparation: string){

        try {
            // 👇️ const response: Response
            const response = await fetch(BASE_URL + "recipes", {
              method: 'POST',
              body: JSON.stringify({
                // mitgegebene Werte im Body setzen
                title: inputTitle,
                Author: inputAuthor,
                image: inputImage,
                note: inputNote,
                preparation: inputPreparation
              }),
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
            });
        
            if (!response.ok) {
              throw new Error(`Error! status: ${response.status}`);
            }

            const result = (await response.json());
        
            console.log('result is: ', JSON.stringify(result, null, 4));
        
            return result;
          } catch (error) {
            if (error instanceof Error) {
              console.log('error message: ', error.message);
              return error.message;
            } else {
              console.log('unexpected error: ', error);
              return 'An unexpected error occurred';
            }
          }
    }


    // Ingredients hinzufügen
    async addIngredient(inputAmount: number, inputUnit: string, inputName: string, inputRecipeId: number){

        try {
            // 👇️ const response: Response
            const response = await fetch(BASE_URL + "ingredients", {
              method: 'POST',
              body: JSON.stringify({
                // mitgegebene Werte im Body setzen
                amount: inputAmount,
                unit: inputUnit,
                name: inputName,
                recipeId: inputRecipeId
              }),
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
            });
        
            if (!response.ok) {
              throw new Error(`Error! status: ${response.status}`);
            }

            const result = (await response.json());
        
            console.log('result is: ', JSON.stringify(result, null, 4));
        
            return result;
          } catch (error) {
            if (error instanceof Error) {
              console.log('error message: ', error.message);
              return error.message;
            } else {
              console.log('unexpected error: ', error);
              return 'An unexpected error occurred';
            }
          }
    }

}

const recipeService = new RecipeService()
export default recipeService
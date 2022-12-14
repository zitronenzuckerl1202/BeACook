import {html, render} from "lit-html"
import { Recipe } from "../../model/recipe"
import { Ingredient } from "../../model/ingredient"
import { RECIPE_SELECTED_EVENT } from "."


const tableTemplate = html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <table class="w3-table-all">
        <thead>
            <tr>
                <th>amount</th>
                <th>unit</th>
                <th>name</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
`
const rowTemplate = (ingredient: Ingredient) => html`
    <td>${ingredient.amount}</td>
    <td>${ingredient.unit}</td>
    <td>${ingredient.name}</td>
`

class RecipeComponent extends HTMLElement{
    private ingredients: [Ingredient]

    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }
    async connectedCallback() {
        
        console.log("Detail View Component connected")
        // selected recipe = null
        //const recipe = this.querySelector("selected-recipe")

        const recipe = JSON.parse(localStorage.getItem("recipe"))
        console.log("selected recipe:", recipe)
        console.log("ingredients: ", recipe.ingredients)

        this.ingredients = recipe.ingredients
        this.render(recipe.ingredients)

    }
    public render(ingredients: Array<Ingredient>) {
        
        console.log("render Details")
        console.log("table ingredients:" + this.ingredients)

        render(tableTemplate, this.shadowRoot)

        const tbody = this.shadowRoot.querySelector("tbody")
        ingredients.forEach(ingredient =>{

            const row = tbody.insertRow()
            render(rowTemplate(ingredient), row)
        });
    }
}

customElements.define("recipe-component", RecipeComponent)
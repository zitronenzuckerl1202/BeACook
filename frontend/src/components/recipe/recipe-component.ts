import {html, render} from "lit-html"
import { Recipe } from "../../model/recipe"
import { Ingredient } from "../../model/ingredient"


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

    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }
    connectedCallback() {
        
        console.log("detail-view for recipe")


    }
    private render(ingredients: Array<Ingredient>) {
        
        render(tableTemplate, this.shadowRoot)

        const tbody = this.shadowRoot.querySelector("tbody")
        ingredients.forEach(ingredient =>{

            const row = tbody.insertRow()
            render(rowTemplate(ingredient), row)
        });
    }
}

customElements.define("recipe-component", RecipeComponent)
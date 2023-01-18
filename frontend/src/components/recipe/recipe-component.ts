import {html, render} from "lit-html"
import { Recipe } from "../../model/recipe"
import { Ingredient } from "../../model/ingredient"
import { OVERVIEW_SELECTED, RECIPE_SELECTED_EVENT } from "."
import store from "../../model/store"


const tableTemplate = html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <div id="recipeDetails"></div>
    <div class="w3-container w3-monospace">
        <h4>Ingredient List</h4>
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
    </div>
    <br />
    <button type="button" class="w3-button w3-black w3-monospace">Back to Overview</button>
        
`

const recipeInfoTemplate = (recipe: Recipe) => html`
    <div class="w3-container w3-monospace">
        <h1>${recipe.title}</h1>
        <img src="${recipe.image}" class="w3-round" height="150px" alt="${recipe.title}">
        <p>Author: ${recipe.Author}</p>
        <p>Note: ${recipe.note}</p>
        <h2>Preparation</h2>
        <p>${recipe.preparation}</p>
    </div>
`

const rowTemplate = (ingredient: Ingredient) => html`
    <td>${ingredient.amount}</td>
    <td>${ingredient.unit}</td>
    <td>${ingredient.name}</td>
`

class RecipeComponent extends HTMLElement{
    private ingredients: Ingredient[]

    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }
    async connectedCallback() {

        store
            .subscribe(model => {

                const currentrecipe = model.recipes.find(recipe => recipe.id == model.currentrecipeid)

                if(currentrecipe){
                    this.render(currentrecipe)
                    this.style.display = "block"
                }
                else{
                    this.style.display = "none"
                }
            })

    }

    public render(recipe: Recipe) {
        render(tableTemplate, this.shadowRoot)

        const recipeDetails = this.shadowRoot.getElementById("recipeDetails")
        
        var frag: DocumentFragment = new DocumentFragment
        render(recipeInfoTemplate(recipe), frag)
        recipeDetails.appendChild(frag)

        const tbody = this.shadowRoot.querySelector("tbody")
        while (tbody.firstChild) {
            tbody.firstChild.remove()
        }
        recipe.ingredients.forEach(ingredient => {

            const row = tbody.insertRow()
            render(rowTemplate(ingredient), row)
        });

        const btn = this.shadowRoot.querySelector("button")
        btn.onclick = () => {
            const event = new CustomEvent(OVERVIEW_SELECTED)
            this.dispatchEvent(event)
        }
    }
}

customElements.define("recipe-component", RecipeComponent)
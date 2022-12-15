import {html, render} from "lit-html"
import { RECIPE_SELECTED_EVENT } from "."
import { Recipe } from "../../model/recipe"
import recipeService from "../../recipe-service"
const tableTemplate = html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <table class="w3-table-all">
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>Author</th>
                <th>image</th>
                <th>note</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
`
const rowTemplate = (recipe: Recipe) => html`
    <td>${recipe.id}</td>
    <td>${recipe.title}</td>
    <td>${recipe.Author}</td>
    <td>${recipe.image}</td>
    <td>${recipe.note}</td>
`
class RecipeTableComponent extends HTMLElement{
    private recipes: [Recipe]

    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }
    async connectedCallback(){
        console.log("Recipe Table Component connected")
        this.recipes = await this.load()
        this.render(this.recipes)
    }
    
    private render(recipes: [Recipe]){
        render(tableTemplate, this.shadowRoot)

        const tbody = this.shadowRoot.querySelector("tbody")
        recipes.forEach(recipe => {
            const row = tbody.insertRow()
            row.onclick = () => {
                const event = new CustomEvent(RECIPE_SELECTED_EVENT, {detail:{recipe}})
                this.dispatchEvent(event)
            }
            render(rowTemplate(recipe),row)
        });
    }
    private async load(): Promise<[Recipe]>{
        const recipes = await recipeService.fetchAll()
        return recipes
    }
}
customElements.define("recipe-table",RecipeTableComponent)
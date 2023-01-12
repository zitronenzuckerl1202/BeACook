import {html, render} from "lit-html"
import { RECIPE_SELECTED_EVENT } from "."
import { Recipe } from "../../model/recipe"
import recipeService from "../../recipe-service"
import store from "../../model/store"
import { distinctUntilChanged, map } from "rxjs"


const tableTemplate = html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <h3>Recipe Table<h3>
    <table class="w3-table-all w3-monospace">
        <thead>
            <tr>
                <th>id</th>
                <th>image</th>
                <th>title</th>
                <th>author</th>
                <th>note</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
`
const rowTemplate = (recipe: Recipe) => html`
    <td>${recipe.id}</td>
    <td><img src="${recipe.image}" class="w3-round" height="150px" alt="${recipe.title}"> </td>
    <td>${recipe.title}</td>
    <td>${recipe.Author}</td>
    <td>${recipe.note}</td>
`
class RecipeTableComponent extends HTMLElement{
    private recipes: [Recipe]

    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }
    connectedCallback(){
        console.log("Recipe Table Component connected")
        recipeService.fetchAll()
        store
            .pipe(
                map(model => model.recipes),
                distinctUntilChanged()
            )
            .subscribe(recipes => {
                this.render(recipes)
            })
    }
    
    private render(recipes: Array<Recipe>){
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
}
customElements.define("recipe-table",RecipeTableComponent) 
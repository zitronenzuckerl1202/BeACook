import { html, render } from "lit-html"
import "./recipe"
import { RECIPE_SELECTED_EVENT } from "./recipe"

const template = html`
    <navbar-component></navbar-component>
    <recipe-table></recipe-table>
    <recipe-component></recipe-component>
`
class AppComponent extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }
    connectedCallback(){
        this.render()
    }
    private render(){
        render(template,this.shadowRoot)
        const recipeTableComponent: HTMLElement = this.shadowRoot.querySelector("recipe-table")
        const recipeComponent: HTMLElement = this.shadowRoot.querySelector("recipe-component")
        recipeTableComponent.addEventListener(RECIPE_SELECTED_EVENT, (r: CustomEvent) => {
            const recipe = r.detail.recipe
            recipeComponent.setAttribute("selected-recipe", recipe.id)
            recipeComponent.style.display = "block"
            recipeTableComponent.style.display = "none"
        })


    }
}
customElements.define("app-component", AppComponent)
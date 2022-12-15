import { html, render } from "lit-html"
import "./recipe"
import { OVERVIEW_SELECTED, RECIPE_SELECTED_EVENT } from "./recipe"

const template = html`
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
        recipeComponent.style.display = "none"

        recipeTableComponent.addEventListener(RECIPE_SELECTED_EVENT, (r: CustomEvent) => {
            
            const recipe = r.detail.recipe
            localStorage.setItem("recipe", JSON.stringify(recipe));
            // TODO render!!

            //recipeComponent.setAttribute("selected-recipe", recipe.id)
            recipeComponent.style.display = "block"
            recipeTableComponent.style.display = "none"
            //console.log("App-Component:", recipe)

            //console.log("String: " + JSON.stringify(recipe))
            
        })


        recipeComponent.addEventListener(OVERVIEW_SELECTED, (r: CustomEvent) =>{

            recipeComponent.style.display = "none"
            recipeTableComponent.style.display = "block"
        })
    }
}
customElements.define("app-component", AppComponent)
import { html, render } from "lit-html"
import store from "../model/store"
import "./recipe"
import { OVERVIEW_SELECTED, RECIPE_SELECTED_EVENT } from "./recipe"
import produce from "immer"

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
        recipeComponent.style.display = "none"

        recipeTableComponent.addEventListener(RECIPE_SELECTED_EVENT, (r: CustomEvent) => {
            
            const selectedrecipeid = r.detail.recipe.id

            console.log("current recipe id: " + selectedrecipeid)

            let nextState = produce(store.getValue(), draft => {
                draft.currentrecipeid = selectedrecipeid
            })
            store.next(nextState)

            recipeTableComponent.style.display = "none"            
        })


        recipeComponent.addEventListener(OVERVIEW_SELECTED, (r: CustomEvent) =>{

            recipeComponent.style.display = "none"
            recipeTableComponent.style.display = "block"
        })
    }
}
customElements.define("app-component", AppComponent)
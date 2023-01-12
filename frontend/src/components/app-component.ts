import { html, render } from "lit-html"
import Navigo from "navigo"
import store from "../model/store"
import "./recipe"
import "./contact-component"
import "./navbar-component"
import "./home-component"

import { OVERVIEW_SELECTED, RECIPE_SELECTED_EVENT } from "./recipe"
import produce from "immer"

const template = html`
    <navbar-component></navbar-component>
    <recipe-table></recipe-table>
    <recipe-component></recipe-component>
    <contact-component></contact-component>
    <home-component></home-component>
`
class AppComponent extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback() {
        this.render()
    }

    private render(){
        render(template,this.shadowRoot)
        const recipeTableComponent: HTMLElement = this.shadowRoot.querySelector("recipe-table")
        const recipeComponent: HTMLElement = this.shadowRoot.querySelector("recipe-component")
        const homeComponent: HTMLElement = this.shadowRoot.querySelector("home-component")
        const contactComponent: HTMLElement = this.shadowRoot.querySelector("contact-component")

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
            //console.log("String: " + JSON.stringify(recipe))
            
        })
        
        window.addEventListener("load", () => {
          const router = new Navigo("/", { hash: true });      
          router
              .on("/", () => {
                homeComponent.style.display = "block"

                recipeTableComponent.style.display = "none"
                recipeComponent.style.display = "none"
                contactComponent.style.display = "none"
            })
            .on("/recipies", () => {
              recipeTableComponent.style.display = "block"

              recipeComponent.style.display = "none"
              homeComponent.style.display = "none"
              contactComponent.style.display = "none"
            })/*
            .on("/recipies/:id", (match) => {
              console.log(match.data.id);
              recipeComponent.style.display = "block"


              recipeTableComponent.style.display = "none"
              homeComponent.style.display = "none"
              contactComponent.style.display = "none"

            })*/
            .on("/contact", () => {
              contactComponent.style.display = "block"

              recipeTableComponent.style.display = "none"
              recipeComponent.style.display = "none"
              homeComponent.style.display = "none"
            })
            .resolve();
        })            

    }
}
customElements.define("app-component", AppComponent)
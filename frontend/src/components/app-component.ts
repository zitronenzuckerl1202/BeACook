import { html, render } from "lit-html"
import Navigo from "navigo"
import "./recipe"
import "./contact-component"
import "./navbar-component"
import { RECIPE_SELECTED_EVENT } from "./recipe"

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
        
        recipeTableComponent.style.display = "none"
        recipeComponent.style.display = "none"
        homeComponent.style.display = "none"
        contactComponent.style.display = "none"


        /*recipeTableComponent.addEventListener(RECIPE_SELECTED_EVENT, (r: CustomEvent) => {
            
            const recipe = r.detail.recipe
            localStorage.setItem("recipe", JSON.stringify(recipe));
            // TODO render!!

            //recipeComponent.setAttribute("selected-recipe", recipe.id)
            recipeComponent.style.display = "block"
            recipeTableComponent.style.display = "none"
            //console.log("App-Component:", recipe)

            //console.log("String: " + JSON.stringify(recipe))
            
        })*/

        window.addEventListener("load", () => {
            const router = new Navigo("/", { hash: true });
            //const render = (content) =>
             // (document.querySelector("#content").innerHTML = content);
    
            router
                .on("", () => {
                  homeComponent.style.display = "block"
                //render("home");
              })
              .on("/recipies", () => {
                recipeTableComponent.style.display = "block"
                //render("Products " + JSON.stringify(match.params));
              })
              .on("/recipies/:id", (match) => {
                console.log(match.data.id);
                recipeComponent.style.display = "block"

                //render("Products " + JSON.stringify(match.params));
              })
              .on("/contact", () => {
                contactComponent.style.display = "block"
                //render("Login");
              })
              .resolve();
        })

        


    }
}
customElements.define("app-component", AppComponent)
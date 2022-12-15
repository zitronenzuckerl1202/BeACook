import { html, render } from "lit-html"
import Navigo from "navigo"
import "./recipe"
import { RECIPE_SELECTED_EVENT } from "./recipe"

const template = html`
    <navbar-component></navbar-component>
    <recipe-table></recipe-table>
    <recipe-component></recipe-component>
    <home-component></home-component>
    <contact-component></contact-component>
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
        
        recipeTableComponent.style.display = "none"
        recipeComponent.style.display = "none"

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
                //render("Login");
              })
              .resolve();
        })

        


    }
}
customElements.define("app-component", AppComponent)
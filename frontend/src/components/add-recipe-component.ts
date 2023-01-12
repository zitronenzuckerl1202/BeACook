import { html, render } from "lit-html"
import Navigo from "navigo"
import store from "../model/store"
import "./recipe"
import "./contact-component"
import "./navbar-component"
import "./home-component"
/*
const template = html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <div class="w3-container w3-monospace">
            <form>
                <label for="inputTitle">Title:</label><br>
                <input type="text" id="inputTitle" name="inputTitle" value=""><br>
                <label for="inputAuthor">Author:</label><br>
                <input type="text" id="inputAuthor" name="inputAuthor" value=""><br>
                <label for="inputImageLink">Image link':</label><br>
                <input type="text" id="inputImageLink" name="inputImageLink" value=""><br>
                <label for="inputNote">Note':</label><br>
                <input type="text" id="inputNote" name="inputNote" value=""><br>
                <label for="inputPreparation">Preparation':</label><br>
                <input type="text" id="inputPreparation" name="inputPreparation" value=""><br>
                <button id="submit" type="button">Submit</Button>
            </form>
        </div>
`
*/
const template = html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <div class="w3-container w3-monospace">
        <h3>ADD RECIPE</h3>
        <p>BeACook <br />
        Machlandstraße 48, Perg
        </p>
    </div>

`

class AddRecipe extends HTMLElement{
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }
    connectedCallback() {
        this.render()

    }
    private render() {
        render(template, this.shadowRoot)
    }
}
customElements.define("add-recipe-component", AddRecipe)
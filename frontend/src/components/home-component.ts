import { html, render } from "lit-html"

const template = html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <div class="w3-container w3-monospace">
      <h2>BeACook - The modern CookBook</h2>
      <p>BeACook was originally a phyisical CookBook with a collection of recipies from a friends. It was a Birthday-Present for a beloved friend.</p>
      <a href="/recipies" class="w3-btn w3-black" data-navigo>Go to Recipie List</a>
    </div>
`

class HomeComponent extends HTMLElement {
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

customElements.define("home-component", HomeComponent)
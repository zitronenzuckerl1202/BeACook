import { html, render } from "lit-html"

const template = html`
    <h1>This is a Test</h1>
`

class ContactComponent extends HTMLElement {
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

customElements.define("contact-component", ContactComponent)
import {html, render} from "lit-html"
import { node } from "webpack"

const template = html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <div id="navbar" class="w3-bar w3-black w3-monospace">
    </div>
` 

const linkTemplate = (link: [string, string]) => html`
    <a href="${link[0]}" class="w3-bar-item w3-button w3-mobile">${link[1]}</a>
`

const navLinks: [string, string][] = [["index.ts", "home"], ["", "recipe list"], ["", "contact"]]

const lTemp = html`
<a href="Test" class="w3-bar-item w3-button w3-mobile w3-monospace">Test</a>
`

class NavBarComponent extends HTMLElement{
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }
    connectedCallback() {
        this.render()
        
    }
    private render() {
        render(template, this.shadowRoot)
        const navbar = this.shadowRoot.getElementById("navbar")

        navLinks.forEach(link => {
            var frag: DocumentFragment = new DocumentFragment
            render(linkTemplate(link), frag)
            navbar.appendChild(frag)
        })

        const child: DocumentFragment = navbar.appendChild(new DocumentFragment())

        render(lTemp, child)

    }
}

customElements.define("navbar-component", NavBarComponent)
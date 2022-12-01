import "./components/app-component"
import "./components/navbar-component"

const title = document.querySelector("title")
title.textContent = "Recipe Table"
const body = document.querySelector("body")
const appComponent = document.createElement("app-component")
body.appendChild(appComponent)


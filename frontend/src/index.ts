import "./components/app-component"

const title = document.querySelector("title")
title.textContent = "BeACook"
const body = document.querySelector("body")
const appComponent = document.createElement("app-component")
body.appendChild(appComponent)



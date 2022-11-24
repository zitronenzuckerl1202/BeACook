import {html, render} from "lit-html"
import { Recipe } from "../../model/recipe"

const tableTemplate = html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <table class="w3-table-all">
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>Author</th>
                <th>image</th>
                <th>note</th>
                <th>preparation</th>
                <th>ingredients</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
`
const rowTemplate = (recipe: Recipe) => html`
    <td>${recipe.id}</td>
    <td>${recipe.title}</td>
    <td>${recipe.Author}</td>
    <td>${recipe.image}</td>
    <td>${recipe.note}</td>
    <td>${recipe.ingredients}</td>
`
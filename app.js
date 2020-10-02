import {
    news
} from "./newsApi.js"

// adding event listener on country menu item
let $dropdown = document.querySelector(".dropdown")
let $menuCountry = document.querySelector(".menu-country")
let $country = document.querySelector(".country")

$dropdown.addEventListener("mouseover", () => {
    // if dropdown is selected county options will shown
    $country.style.display = ($dropdown.classList[1] == "fa-caret-down") ? "block" : "none"
    // if doprdown selected then downward will be chnaged to upward viceversa
    $dropdown.classList = ($dropdown.classList[1] == "fa-caret-down") ? "fa fa-caret-up dropdown" : "fa fa-caret-down dropdown"

})

// if anywhere in body is clicked
document.querySelector("body").addEventListener("click", () => {
    // if dropdown is selected county options will shown
    $country.style.display = "none"
    // if doprdown selected then downward will be changed to upward viceversa
    $dropdown.classList = "fa fa-caret-down dropdown"

})

document.querySelector(".india").addEventListener("click", () => news("in"))

document.querySelector(".us").addEventListener("click", () => news("us"))
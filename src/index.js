import "./style.css"
import { home } from "./components/home"
import { menu } from "./components/menu"
import { about } from "./components/about"

const homeButton = document.getElementById("home")
const menuButton = document.getElementById("menu")
const aboutButton = document.getElementById("about")

homeButton.addEventListener("click", () => {
  home()
})

menuButton.addEventListener("click", () => {
  menu()
})

aboutButton.addEventListener("click", () => {
  about()
})

home()
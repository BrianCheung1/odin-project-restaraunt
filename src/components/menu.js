import toast1 from "../public/toast1.jpg"
import toast2 from "../public/toast2.jpg"
import toast3 from "../public/toast3.jpg"

export const menu = () => {
  console.log("menu page")

  const container = document.getElementById("content")
  const restaurantHeadline = document.createElement("h1")
  const imageContainer = document.createElement("div")
  const restaurantFigure1 = document.createElement("figure")
  const restaurantFigure2 = document.createElement("figure")
  const restaurantFigure3 = document.createElement("figure")
  const restaurantFigure1Caption = document.createElement("figcaption")
  const restaurantFigure2Caption = document.createElement("figcaption")
  const restaurantFigure3Caption = document.createElement("figcaption")
  const restaurantImage1 = document.createElement("img")
  const restaurantImage2 = document.createElement("img")
  const restaurantImage3 = document.createElement("img")

  const restaurantParagraph = document.createElement("p")

  imageContainer.classList.add("image-container")

  container.textContent = ""
  restaurantHeadline.textContent = "Menu"
  restaurantHeadline.style.textWrap = "nowrap"

  restaurantImage1.src = toast1
  restaurantImage2.src = toast2
  restaurantImage3.src = toast3

  restaurantFigure1Caption.textContent = "Toast1"
  restaurantFigure2Caption.textContent = "Toast2"
  restaurantFigure3Caption.textContent = "Toast3"

  restaurantParagraph.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora maiores vel corrupti molestias pariatur laudantium aut molestiae at facilis necessitatibus dicta libero adipisci sed, totam labore, ducimus quo suscipit!"
  restaurantParagraph.style.minWidth = "300px"

  container.appendChild(restaurantHeadline)

  restaurantFigure1.appendChild(restaurantImage1)
  restaurantFigure2.appendChild(restaurantImage2)
  restaurantFigure3.appendChild(restaurantImage3)
  restaurantFigure1.appendChild(restaurantFigure1Caption)
  restaurantFigure2.appendChild(restaurantFigure2Caption)
  restaurantFigure3.appendChild(restaurantFigure3Caption)
  imageContainer.appendChild(restaurantFigure1)
  imageContainer.appendChild(restaurantFigure2)
  imageContainer.appendChild(restaurantFigure3)
  container.appendChild(imageContainer)
  container.appendChild(restaurantParagraph)
}

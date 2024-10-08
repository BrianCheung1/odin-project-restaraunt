import homeImage from "../public/egg-sandwich.png"
export const about = () => {
  console.log("about page")

  const container = document.getElementById("content")
  const restaurantHeadline = document.createElement("h1")
  const restaurantImage = document.createElement("img")
  const restaurantParagraph1 = document.createElement("p")
  const restaurantParagraph2 = document.createElement("p")

  container.textContent = ""
  restaurantHeadline.textContent = "About Us"
  restaurantHeadline.style.textWrap = "nowrap"

  restaurantImage.src = homeImage
  restaurantImage.height = 400

  restaurantParagraph1.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora maiores vel corrupti molestias pariatur laudantium aut molestiae at facilis necessitatibus dicta libero adipisci sed, totam labore, ducimus quo suscipit!"

  restaurantParagraph1.style.minWidth = "300px"
  restaurantParagraph1.style.maxWidth = "300px"

  restaurantParagraph2.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora maiores vel corrupti molestias pariatur laudantium aut molestiae at facilis necessitatibus dicta libero adipisci sed, totam labore, ducimus quo suscipit!"
  restaurantParagraph2.style.minWidth = "300px"

  container.appendChild(restaurantHeadline)
  container.appendChild(restaurantImage)
  container.appendChild(restaurantParagraph1)
  container.appendChild(restaurantParagraph2)
}

export const about = () => {
  console.log("about page")

  const container = document.getElementById("content")
  const restaurantHeadline = document.createElement("h1")
  const restaurantImage = document.createElement("img")
  const restaurantParagraph = document.createElement("p")

  container.textContent = ""
  restaurantHeadline.textContent = "About Us"
  restaurantImage.src =
    "http://www.google.com/intl/en_com/images/logo_plain.png"
  restaurantParagraph.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora maiores vel corrupti molestias pariatur laudantium aut molestiae at facilis necessitatibus dicta libero adipisci sed, totam labore, ducimus quo suscipit!"

  container.appendChild(restaurantHeadline)
  container.appendChild(restaurantImage)
  container.appendChild(restaurantParagraph)
}

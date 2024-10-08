import homeImage from "../public/egg-sandwich.png"

export const home = () => {
  console.log("home page")
  const container = document.getElementById("content")
  const restaurantHeadline = document.createElement("h1")
  const restaurantImage = document.createElement("img")
  const restaurantHeader1 = document.createElement("h1")
  const restaurantHeader2 = document.createElement("h1")
  const restaurantParagraph1 = document.createElement("p")
  const restaurantListContainer = document.createElement("ul")

  container.textContent = ""
  restaurantHeadline.textContent = "Butter's Toast"
  restaurantHeadline.style.textWrap = "nowrap"

  restaurantImage.src = homeImage
  restaurantImage.height = 400

  restaurantHeader1.textContent = "Who we are"
  restaurantHeader1.style.textWrap = "nowrap"
  restaurantParagraph1.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora maiores vel corrupti molestias pariatur laudantium aut molestiae at facilis necessitatibus dicta libero adipisci sed, totam labore, ducimus quo suscipit!"
  restaurantParagraph1.style.minWidth = "300px"
  restaurantParagraph1.style.maxWidth = "600px"

  restaurantHeader2.textContent = "Hours"

  for (let i = 0; i < 6; i++) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    const restaurantList = document.createElement("li")
    // Create span for day and time
    const daySpan = document.createElement("span")
    const timeSpan = document.createElement("span")

    daySpan.textContent = `${days[i]}: `
    timeSpan.textContent = "9AM - 9PM"

    // Apply styles to align the times
    daySpan.style.display = "inline-block"
    daySpan.style.minWidth = "100px" // Adjust to ensure the day column width is consistent
    timeSpan.style.display = "inline-block"

    restaurantList.appendChild(daySpan)
    restaurantList.appendChild(timeSpan)
    restaurantListContainer.appendChild(restaurantList)
  }

  container.appendChild(restaurantHeadline)
  container.appendChild(restaurantImage)
  container.appendChild(restaurantHeader1)
  container.appendChild(restaurantParagraph1)
  container.appendChild(restaurantHeader2)
  container.appendChild(restaurantListContainer)
}

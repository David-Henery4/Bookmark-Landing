
const burger = document.getElementById("burger")
const sidebar = document.getElementById("sidebar")
const closeIcon = document.getElementById("close-icon")

burger.addEventListener("click", () => {
  sidebar.style.transform = "translateX(0%)"
})

closeIcon.addEventListener("click", () => {
  sidebar.style.transform = "translateX(100%)";
})
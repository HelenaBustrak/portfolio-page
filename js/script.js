const checkBox = document.querySelector("#hamburger-menu");
const mobileBars = document.querySelector(".mobile-menu")

checkBox.addEventListener("click", () => {
    mobileBars.classList.toggle("open");
});
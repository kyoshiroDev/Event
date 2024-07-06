// Button navbar
const menuBurger = document.querySelector(".button-burger");
const navBar = document.querySelector("nav");

const menuBurgerImage = document.querySelector(".burger-image");

menuBurger.addEventListener("click", () => {
	navBar.classList.toggle("open");
  if (navBar.classList.contains("open")) {
    menuBurgerImage.src = "/Images/x.svg";
  } else {
    menuBurgerImage.src = "/Images/menu_burger.svg"
  }
});

//
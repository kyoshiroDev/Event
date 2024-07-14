// Button navbar
const menuBurger = document.querySelector(".button-burger");
const navBar = document.querySelector("nav");

const menuBurgerImage = document.querySelector(".burger-image");

menuBurger.addEventListener("click", () => {
	navBar.classList.toggle("open");
	if (navBar.classList.contains("open")) {
		menuBurgerImage.src = "/Images/x.svg";
	} else {
		menuBurgerImage.src = "/Images/menu_burger.svg";
	}
});

// connection api instagram

/*let url =
	"https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=IGQWROWU1jOGpKYUNORDVSMi1RZAlJJbEhmaDU3T19FM1o4bmJSX2NHa1FlVzNxOHJCaE4yZA2FEZAzhOdW5jc0pwTFRBd1lWaDk0bkc1RW9hbEJuS1kwTHZARTmNNbEwxNGpkd3hWMktLN3d1V01GWXhRUkRMb2YwOE0ZD";

fetch(url)
	.then((response) => response.json())
	.then((data) => {
		resultat = Object.entries(data.data);
    for (let i = 0; i < resultat.length; i++)
      console.log(resultat[i])
		console.log(resultat);
	});*/

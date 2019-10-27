var menuButton = document.querySelector(".hamburger");
var hamburger = document.querySelector(".hamburgerUl");

function myHamburger(){
	hamburger.classList.toggle('hamburgerUlActive');
}

menuButton.addEventListener('click', myHamburger);
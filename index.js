"use strict";

//Building a Slider component
const slider = document.querySelector(".sliders");
const slides = document.querySelectorAll(".slidee");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");

let curSlide = 0;
const goToSlide = function (slide) {
	slides.forEach((s, i) => {
		s.style.transform = `translateX(${100 * (i - slide)}%)`;
	});
};
goToSlide(0);
const maxSlide = slides.length;
//Next slide
const nextSlide = function () {
	if (curSlide === maxSlide - 1) {
		curSlide = 0;
	} else {
		curSlide++;
	}
	goToSlide(curSlide);
};
btnRight.addEventListener("click", nextSlide);

//Previous slide
const prevSlide = function () {
	if (curSlide === 0) {
		curSlide = maxSlide - 1;
	} else {
		curSlide--;
	}
	goToSlide(curSlide);
};
btnLeft.addEventListener("click", prevSlide);

//Pressing arrow to scroll
document.addEventListener("keydown", function (e) {
	console.log(e.key);
	if (e.key === "ArrowRight") {
		nextSlide();
	}
	e.key === "ArrowLeft" && prevSlide();
});

//HAMBURGER MENU
const mainMenu = document.querySelector(".nav-item");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu = document.querySelector(".menu-list");
const menu_items = document.querySelectorAll(".linkk");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
	menu.style.display = "block";
	menu.style.opacity = "0";
	setTimeout(function () {
		menu.style.opacity = "1";
	}, 10);
	// mainMenu.style.display = "flex";
	// mainMenu.style.top = "0";
}
function close() {
	menu.style.display = "none";
}

menu_items.forEach((item) => {
	item.addEventListener("click", function () {
		close();
	});
});

menu_items.forEach((item) => {
	item.addEventListener("click", function () {
		close();
	});
});

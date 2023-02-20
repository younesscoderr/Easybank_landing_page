'use strict';

const menuBtn = document.getElementById('menu-btn');
const closeMenu = document.getElementById('close-btn');
const navBar = document.getElementById('nav-bar');

menuBtn.addEventListener('click', function () {
	closeMenu.classList.toggle('open');
	menuBtn.classList.toggle('open');
	navBar.classList.toggle('open');
});

closeMenu.addEventListener('click', function () {
	menuBtn.classList.toggle('open');
	closeMenu.classList.toggle('open');
	navBar.classList.toggle('open');
});

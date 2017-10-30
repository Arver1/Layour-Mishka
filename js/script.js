'use strict';
(function(){
	var burgerMenu = document.querySelector('.main-nav__toggle');
	function openMenu(){
		console.log('click');
		burgerMenu.style.animationName = "burger";
		burgerMenu.style.animationDuration = "5s";
	};
	burgerMenu.addEventListener('click', openMenu);
})();
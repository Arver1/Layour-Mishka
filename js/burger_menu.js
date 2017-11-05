'use strict';
(function(){
	var mainNav = document.querySelector('.main-nav');
	var iconMenu = mainNav.querySelector('.main-nav__toggle');
	var burgerMenu = mainNav.querySelector('.main-nav__menu-wrapper');
	if (iconMenu.classList.contains('main-nav__toggle--open')) {
		burgerMenu.classList.add('visually-hidden');
		iconMenu.classList.remove('main-nav__toggle--open');
		iconMenu.classList.add('main-nav__toggle--close');
	}
	function closeMenuEsc(evt) {
		if(evt.keyCode == window.util.ESC_KEYCODE) {
			iconMenu.classList.remove('main-nav__toggle--open');
			iconMenu.classList.add('main-nav__toggle--close');
			window.util.closePopUp(burgerMenu);
			document.removeEventListener('keydown', closeMenuEsc);
		}
	};
	function toggle(){
		document.addEventListener('keydown', closeMenuEsc);
		if (iconMenu.classList.contains('main-nav__toggle--open')) {
			iconMenu.classList.remove('main-nav__toggle--open');
			iconMenu.classList.add('main-nav__toggle--close');
			window.util.closePopUp(burgerMenu);
		}
		else if (iconMenu.classList.contains('main-nav__toggle--close')) {
			iconMenu.classList.remove('main-nav__toggle--close');
			iconMenu.classList.add('main-nav__toggle--open');
			window.util.showPopUp(burgerMenu);
		}
	};
	iconMenu.addEventListener('click', toggle);
	iconMenu.addEventListener('keydown', function(evt) {
		if(evt.keyCode == window.util.ENTER_KEYCODE) {
			toggle();
		}
	});
})();
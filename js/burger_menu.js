'use strict';
(function(){
	var mainNav = document.querySelector('.main-nav');
	var iconMenu = mainNav.querySelector('.main-nav__toggle');
	var burgerMenuWrapper = mainNav.querySelector('.main-nav__menu-wrapper');
	if (iconMenu.classList.contains('main-nav__toggle--open')) {
		burgerMenuWrapper.classList.remove('main-nav__menu-wrapper');
		burgerMenuWrapper.classList.add('main-nav__menu-wrapper--close');
		iconMenu.classList.remove('main-nav__toggle--open');
		iconMenu.classList.add('main-nav__toggle--close');
	}
	function closeMenuEsc(evt) {
		if(evt.keyCode == window.util.ESC_KEYCODE) {
			iconMenu.classList.remove('main-nav__toggle--open');
			iconMenu.classList.add('main-nav__toggle--close');
			window.util.addModClose(burgerMenuWrapper);
			document.removeEventListener('keydown', closeMenuEsc);
		}
	};
	function toggle(){
		document.addEventListener('keydown', closeMenuEsc);
		if (iconMenu.classList.contains('main-nav__toggle--open')) {
			iconMenu.classList.remove('main-nav__toggle--open');
			iconMenu.classList.add('main-nav__toggle--close');
			window.util.addModClose(burgerMenuWrapper);
		}
		else if (iconMenu.classList.contains('main-nav__toggle--close')) {
			iconMenu.classList.remove('main-nav__toggle--close');
			iconMenu.classList.add('main-nav__toggle--open');
			window.util.addModOpen(burgerMenuWrapper);
		}
	};
	iconMenu.addEventListener('click', toggle);
	iconMenu.addEventListener('keydown', function(evt) {
		if(evt.keyCode == window.util.ENTER_KEYCODE) {
			toggle();
		}
	});
})();
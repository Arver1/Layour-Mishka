'use strict';
(function(){
	var mainNav = document.querySelector('.main-nav');
	var burgerMenu = mainNav.querySelector('.main-nav__toggle');
	var burgerMenuList = mainNav.querySelector('.main-nav__list');
	var userBlockList = mainNav.querySelector('.user-block-list');
	function showMenu(menu) {
		menu.style.display = "block";
	};
	function closeMenu(menu) {
		menu.style.display = "none";
	};
	function closeMenuEsc(evt) {
		if(evt.keyCode == window.util.ESC_KEYCODE) {
			burgerMenu.classList.remove('main-nav__toggle-open');
			burgerMenu.classList.add('main-nav__toggle');
			closeMenu(burgerMenuList);
			document.removeEventListener('keydown', closeMenuEsc);
		}
	};
	function toggle(){
		document.addEventListener('keydown', closeMenuEsc);
		if (burgerMenu.classList.contains('main-nav__toggle-open')) {
			burgerMenu.classList.remove('main-nav__toggle-open');
			burgerMenu.classList.add('main-nav__toggle');
			closeMenu(burgerMenuList);
		}
		else if (burgerMenu.classList.contains('main-nav__toggle')) {
			burgerMenu.classList.remove('main-nav__toggle');
			burgerMenu.classList.add('main-nav__toggle-open');
			showMenu(burgerMenuList);
		}
	};
	burgerMenu.addEventListener('click', toggle);
	burgerMenu.addEventListener('keydown', function(evt) {
		if(evt.keyCode == window.util.ENTER_KEYCODE) {
			toggle();
		}
	});
})();
'use strict';
(function(){
	var mainNav = document.querySelector('.main-nav');
	var iconMenu = mainNav.querySelector('.main-nav__toggle');
	var burgerMenuItems = mainNav.querySelector('.main-nav__items');
	var burgerMenuUserBlockItems = mainNav.querySelector('.main-nav__user-block-items');
	var burgerMenuItemsClose = 'main-nav__items--hidden';
	var burgerMenuUserBlockItemsClose ='main-nav__user-block-items--hidden';
	if (iconMenu.classList.contains('main-nav__toggle--open')) {
		burgerMenuItems.classList.add(burgerMenuItemsClose);
		burgerMenuUserBlockItems.classList.add(burgerMenuUserBlockItemsClose);
		iconMenu.classList.remove('main-nav__toggle--open');
		iconMenu.classList.add('main-nav__toggle--close');
	}
	function closeMenuEsc(evt) {
		if(evt.keyCode == window.util.ESC_KEYCODE) {
			iconMenu.classList.remove('main-nav__toggle--open');
			iconMenu.classList.add('main-nav__toggle--close');
			window.util.closePopUp(burgerMenuItems, burgerMenuItemsClose);
			window.util.closePopUp(burgerMenuUserBlockItems, burgerMenuUserBlockItemsClose);
			document.removeEventListener('keydown', closeMenuEsc);
		}
	};
	function toggle(){
		document.addEventListener('keydown', closeMenuEsc);
		if (iconMenu.classList.contains('main-nav__toggle--open')) {
			iconMenu.classList.remove('main-nav__toggle--open');
			iconMenu.classList.add('main-nav__toggle--close');
			window.util.closePopUp(burgerMenuItems, burgerMenuItemsClose);
			window.util.closePopUp(burgerMenuUserBlockItems, burgerMenuUserBlockItemsClose);
		}
		else if (iconMenu.classList.contains('main-nav__toggle--close')) {
			iconMenu.classList.remove('main-nav__toggle--close');
			iconMenu.classList.add('main-nav__toggle--open');
			window.util.showPopUp(burgerMenuItems, burgerMenuItemsClose);
			window.util.showPopUp(burgerMenuUserBlockItems, burgerMenuUserBlockItemsClose);
		}
	};
	iconMenu.addEventListener('click', toggle);
	iconMenu.addEventListener('keydown', function(evt) {
		if(evt.keyCode == window.util.ENTER_KEYCODE) {
			toggle();
		}
	});
})();
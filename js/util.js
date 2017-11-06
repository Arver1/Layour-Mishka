'use strict';
(function() {
	window.util = {
		ESC_KEYCODE: '27',
		ENTER_KEYCODE: '13',
		showPopUp: function (container, classHide) {
			if(container.classList.contains(classHide)) {
				container.classList.remove(classHide);
			}
		},
		closePopUp: function (container, classHide) {
			container.classList.add(classHide);
		}
	};
})();
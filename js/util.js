'use strict';
(function() {
	window.util = {
		ESC_KEYCODE: '27',
		ENTER_KEYCODE: '13',
		showPopUp: function (container) {
			if(container.classList.contains('visually-hidden')) {
				container.classList.remove('visually-hidden');
			}
		},
		closePopUp: function (container) {
			container.classList.add('visually-hidden');
		}
	};
})();
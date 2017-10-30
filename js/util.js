'use strict';
(function() {
	window.util = {
		ESC_KEYCODE: '27',
		ENTER_KEYCODE: '13',
		showPopUp: function (container) {
			container.style.display = "block";
		},
		closePopUp: function (container) {
			container.style.display = "none";
		}
	};
})();

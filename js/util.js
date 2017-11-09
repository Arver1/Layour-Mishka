'use strict';
(function() {
	var temp;
	window.util = {
		ESC_KEYCODE: '27',
		ENTER_KEYCODE: '13',
		addModOpen: function (container) {
			temp = container.className.split(' ');
			container.classList.remove(temp[0]);
			temp[0] = temp[0].replace("--close","--open");
			container.classList.add(temp[0]);
		},
		addModClose: function (container) {
			temp = container.className.split(' ');
			container.classList.remove(temp[0]);
			temp[0] = temp[0].replace("--open","--close");
			container.classList.add(temp[0]);
		},
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
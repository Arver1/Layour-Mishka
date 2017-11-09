'use strict';
(function() {
	var btnOrder = document.querySelector('.btn.btn-order');
	var maskPopUp = document.querySelector('.mask-popup');
	btnOrder.addEventListener('click', function(evt) {
		evt.preventDefault();
		window.util.showPopUp(maskPopUp,'visually-hidden');
});
})();

'use strict';
(function() {
	var btnOrder = document.querySelector('.btn.btn-order');
	var goodsOrderWrapper = document.querySelector('.goods__order-wrapper');
	btnOrder.addEventListener('click', function(evt) {
		evt.preventDefault();
		window.util.showPopUp(goodsOrderWrapper);
});
})();

'use strict';
(function(){
	var classNameHide;
	var formInitField = document.querySelectorAll('.form-initials__wrapper input');
	var formTelField = document.querySelector('.form-tel__field');
	var formEmailField = document.querySelector('.form-email__field');
	var formExtraField = document.querySelector('.form-extra__field');
	formExtraField.addEventListener('blur', function(evt) {
		hideLabel(evt);
	});
	formTelField.addEventListener('blur', function(evt) {
		hideLabel(evt);
	});
	formEmailField.addEventListener('blur', function(evt) {
		hideLabel(evt);
	});
	for(var i = 0; i < formInitField.length; i++) {
		formInitField[i].addEventListener('blur', function(evt) {
			hideLabel(evt);
		});
	}
	function hideLabel(evt) {
		classNameHide = evt.target.className.split(' ')[0]+'-hide';
		if(evt.target.value != '') {
			if(!evt.target.classList.contains(classNameHide)) {
				evt.target.classList.add(classNameHide);
			}
		} else {
			if(evt.target.classList.contains(classNameHide)) {
				evt.target.classList.remove(classNameHide);
			}
		}
	}
})();
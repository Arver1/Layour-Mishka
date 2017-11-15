'use strict';
(function(){
	var formInitials = document.querySelectorAll('.form-initials__wrapper input');
	for(var i = 0; i < formInitials.length; i++) {
		formInitials[i].addEventListener('blur', function(evt) {
			if(evt.target.value != '') {
				if(!evt.target.classList.contains('form-initials__field-hide')) {
					evt.target.classList.add(evt.target.className.split(' ')[0]+'-hide');
				}
			} else {
				if(evt.target.classList.contains('form-initials__field-hide')) {
					evt.target.classList.remove('form-initials__field-hide');
				}
			}
		});
	}
})();
'use strict';
(function(){
	var videoWrapper = document.querySelector('.video-of-production__video-wrapper');
	var video = videoWrapper.querySelector('video');
	var videoPoster = videoWrapper.querySelector('.video-of-production__poster');
	var btnPlay = videoWrapper.querySelector('.btn-play');
	btnPlay.addEventListener('click', function () {
		video.src = 'img/RuthLorenzo.mp4';
		window.util.closePopUp(videoPoster,'visually-hidden');
		window.util.closePopUp(btnPlay,'visually-hidden');
		video.setAttribute('controls', '');
	});
})();
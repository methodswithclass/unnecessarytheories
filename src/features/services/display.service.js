serviceModule.factory("display.service", ['$http', function ($http) {

	var u = shared.utility_service;


	var adjustImageSize = function () {


		u.waitForElem({elems:["#splash", "#banner"]}, function () {

			var $splash = $("#splash");
			var $banner = $("#banner");

			var splashAspect = $splash.width()/$splash.height();
			var bannerAspect = $banner.width()/$banner.height();

			if ($banner.height() < $splash.height()) {

				$banner.css({height:$splash.height()*1.2, width:$splash.height()*1.2*bannerAspect})
			}
			else if ($banner.width() < $splash.width()) {

				$banner.css({height:$splash.width()*1.2/bannerAspect, width:$splash.width()*1.2})
			}


		})

	}


	return {
		adjustImageSize:adjustImageSize
	}


}]);
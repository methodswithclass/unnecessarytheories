badgesModule.directive("share", ['$window', 'data.service', 'global', function ($window, data, g) {

	return {

		restrict:'E',
		scope:{
			type:"@",
			name:"@",
			size:"@"
		},
		replace:true,
		template:'<div class="absolute width height pointer"></div>',
		link:function ($scope, element, attr) {

			var env = data.env();
			var blog;
			var url;


			blog = data.getBlogByName($scope.name);

			console.log("share", blog.meta.name);
			

			if ($scope.name == "home") {

				url = env.url;
			}
			else {

				url = blog.share.facebook.url;
			}

			var share = {icon:"", hover:"", size:""};

			if ($scope.type == 'fb') {
				share.icon = 'fa-facebook-f';
				if (!g.isMobile()) share.hover = 'fb';
			}
			else {
				share.icon = 'fa-twitter';
				if (!g.isMobile()) share.hover = 'twitter';
			}

			if (g.isMobile()) {
				share.size = "fa-5x";
			}
			else {
				share.size = "fa-3x";
			}

			var img = "<div class='absolute center white "+ share.hover +"'><i class='fab " + share.size + " " + share.icon + "'></i></div>";



			var getTweet = function () {
				return blog ? encodeURI(blog.share.twitter.description + "\n \n" + url) : "";
			}
				
			element.append(img);

            element.on("click", function () {

            	console.log("share clicked", url);

            	if ($scope.type == "fb") {

	            	// $window.fbAsyncInit();

					FB.ui({
						method: "share",
						href:url
					}, function(response){

						console.log("share response");
						console.log(response);

					});
					
            	}
            	else if ($scope.type == "twitter") {

            		console.log("clicked tweet");

            		$window.open("https://twitter.com/intent/tweet?text=" + getTweet(), "_blank");
            	}

            });

		}
	}
}]);
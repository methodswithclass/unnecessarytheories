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

			if ($scope.name == "home") {

				url = env.url;
			}
			else {

				url =  env.url + '/blog/' + $scope.name;
			}

			blog = data.getBlogByName($scope.name);

			console.log("share", blog.meta.name);
			

			//$scope.img = $scope.type == "fb" ? "img/fbshare.png" : "img/twittershare.png";
			
			//var img = "<img class='relative width height-auto' src='"+ $scope.img +"'/>"

			var share = {icon:"", hover:"", size:""};

			if ($scope.type == 'fb') {
				share.icon = 'fa-facebook';
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

			var img = "<div class='absolute center white "+ share.hover +"'><i class='fa " + share.size + " " + share.icon + "'></i></div>";



			var getTweet = function () {
				return blog ? encodeURI(blog.twitter.description + "\n \n" + url) : "";
			}
				
			element.append(img);

            element.on("click", function () {

            	console.log("share clicked", url);

            	if ($scope.type == "fb") {

	            	$window.asyncFBInit();

					FB.ui({
						method: 'feed',
						link:url,
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
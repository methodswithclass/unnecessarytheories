blogModule.controller("piece.controller", ['$scope', 'data.service', 'runtime.state', 'states', '$state', '$window', 'events.service', '$location', 'global.service', 'send.service', 'display.service', function ($scope, data, runtime, states, $state, $window, events, $location, g, send, display) {


	var self = this;

	console.log("enter piece controller");


	display.adjustImageSize();


	var bl = send.retrieve.get({name:"navigate"});

	var blogName = bl[bl.length-1];

	console.log("blo navigate", blogName);


	$scope.blog = data.getBlogByName(blogName);

	$scope.url = $scope.blog.facebook.url;


	$window.asyncFBInit = function () {

		console.log("facebook sdk loaded");

		var env = data.env();

		try {

			FB.init({
				appId: env.id,
				status: true, 
				cookie: true, 
				xfbml: true,
				// version: 'v2.4',
				version: 'v2.11'
			});

		}
		catch (e) {
			console.log("no FB object", e.message);
		}
	}

	console.log("blog in controller is:", $scope.blog);


	$("#body").scrollTo(0);

}]);
blogModule.controller("blogCtrl", ['$scope', 'data.service', 'runtime.state', 'states', '$window', 'events', '$location', 'global', 'send', function ($scope, data, runtime, states, $window, events, $location, g, send) {

	console.log("enter blog controller");

	var self = this;

	this.blogs = data.blogs;
	this.home = data.home;
	this.title = data.home.meta.title;

	//states.setupReceivers();

	var blog = send.retrieve.get({name:"inbound"})[0];

	console.log("blog in controller is:", blog);

	// if (data.isBlog(blog)) {
	// 	console.log("controller inbound", blog);

	// 	states.go(blog);
	// }

	

	$scope.menu = [
	{
		id:"home",
		title:"Home",
		state:"home",
		url:"/blog/home"
	},
	{
		id:"nonfict",
		title:"Non-Fiction",
		state:"blog.non_fiction",
		url:"/blog/non-fiction"
	},
	{
		id:"poetry",
		title:"Poetry",
		state:"blog.poetry",
		url:"/blog/poetry"
	}
	]

	$scope.openExternal = function (link) {

		$window.open(link, "_blank");
	}

	$scope.getContentUrl = function() {

		return 'assets/views/' + (g.isMobile() ? "m.home.html" : "d.home.html");
	}



	$window.asyncFBInit = function () {

		console.log("facebook sdk loaded");

		var env = data.env();

		try {

			FB.init({
				appId: env.id,
				status: true, 
				cookie: true, 
				xfbml: true,
				version: 'v2.4'
			});

		}
		catch (e) {
			console.log("no FB object", e.message);
		}
	}

	$("#body").scrollTo(0);

}]);
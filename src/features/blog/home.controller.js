blogModule.controller("home.controller", ['$scope', 'data.service', 'runtime.state', 'states', '$state', '$window', 'events', '$location', 'global', 'send', 'display.service', function ($scope, data, runtime, states, $state, $window, events, $location, g, send, display) {

	console.log("enter home controller");

	var self = this;


	this.home = data.home;
	this.title = data.home.meta.title;


	display.adjustImageSize();


	self.genres = data.genres.genres;

	self.getBlogs = function (genre) {

		return data.getBlogsByGenre(genre.id);
	}

	self.blogClick = function (blog, genre) {

		send.setup.save({name:"navigate", data:blog});

		console.log("blog is", blog, genre);

		// $state.go(".piece" + self.genre, {name:blog});
		states.go(blog, genre);
	}

	$scope.openExternal = function (link) {

		$window.open(link, "_blank");
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
				// version: 'v2.4',
				version: 'v2.11'
			});

		}
		catch (e) {
			console.log("no FB object", e.message);
		}
	}


	$("#body").scrollTo(0);

}]);
blogModule.controller("home.controller", ['$scope', 'data.service', 'runtime.state', 'states', '$state', '$window', 'events.service', '$location', 'global.service', 'send.service', 'display.service', function ($scope, data, runtime, states, $state, $window, events, $location, g, send, display) {

	console.log("enter home controller");

	var self = this;


	this.home = data.home;
	this.title = data.home.meta.title;


	var state = states.current();
	var stateArray = state.split(".");
	this.genreGenre = stateArray[1] || state;

	console.log("genre is", self.genreGenre);
	
	display.adjustImageSize();

	self.menu = data.menu;

	self.menuClick = function ($state) {

		var state = $state != "home" ? "home." + $state : $state;

		self.genreGenre = $state;

		states.go(state);
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
				version: 'v2.4'
			});

		}
		catch (e) {
			console.log("no FB object", e.message);
		}
	}

	$("#body").scrollTo(0);

}]);
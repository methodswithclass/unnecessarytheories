var app = angular.module('blog', ['shared.module', 'stateModule', 'blogModule', "ui.router"]);


var checking = "/checking";
var invalid = "/desktop";
var valid = "/mobile";
var credits = "/credits";



app.config(['runtime.stateProvider', '$locationProvider', function (runtimeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	var states = runtimeProvider.states;

	for (var i = 0; i < states.length; i++) {
	  runtimeProvider.addState(states[i]);
	}

}])

.run(["states", "$window", "data.service", function (states, $window, data) {

	states.checkInbound();

	// forceMobile();


	window.fbAsyncInit = function () {

		console.log("load facebook sdk");

		var env = data.env();

		try {

			// FB.init({
			// 	appId: env.id,
			// 	status: true, 
			// 	cookie: true, 
			// 	xfbml: true,
			// 	version: 'v3.0'
			// });

		    FB.init({
		      appId            : env.id,
		      autoLogAppEvents : true,
		      xfbml            : true,
		      version          : 'v3.1'
		    });

			console.log("facebook sdk loaded");

		}
		catch (e) {
			console.log("Error, message:", e.message, "\n\nsdk not loaded");
		}
	}



}]);
var app = angular.module('blog', ['sharedModule', 'consoleModule', 'stateModule', 'blogModule', "ui.router"]);


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

}]).run(function (states) {

	states.checkInbound();

	//forceMobile();

});
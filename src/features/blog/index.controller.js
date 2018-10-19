blogModule.controller("index.controller", ['$scope', 'data.service', 'runtime.state', 'states', '$state', '$window', 'events', '$location', 'global', 'send', 'display.service', function ($scope, data, states, events, g, send) {

	console.log("enter index controller");

	var self = this;


	var env = data.env();

	self.name = env.name;


}]);
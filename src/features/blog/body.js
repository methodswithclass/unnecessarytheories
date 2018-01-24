
blogModule.directive("body", ['send.service', function (send) {

	return function ($scope, element, attr) {

		send.retrieve.accum({name:"body", id:"body", data:element[0]});
	}

}]);
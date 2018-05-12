blogModule.directive("footer", ['global', 'events', 'states', '$window', 'data.service', function (g, events, states, $window, data) {

	return {
		restrict:'E',
		scope:{},
		replace:true,
		templateUrl:"assets/views/g.footer.html",
		link:function ($scope, element, attr) {


			$scope.height = "height-300";
			$scope.font = "font-20";

			if (g.isMobile()) {
				$scope.height = "height-400";
				$scope.font = "font-40";
	        }

		}
	}
}]);
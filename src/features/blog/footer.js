blogModule.directive("footer", ['global', 'events', 'states', function (g, events, states) {

	return {
		restrict:'E',
		scope:{},
		replace:true,
		templateUrl:"features/views/g.footer.html",
		link:function ($scope, element, attr) {


			// $scope.ishome = true;

			// events.on("stateChange", function () {

			// 	console.log("footer state is", states.current());

			// 	$scope.ishome = states.current() == "home";
			// 	//$scope.$apply();

			// });


			$scope.height = "height-300";
			$scope.font = "font-20";

			if (g.isMobile()) {
				$scope.height = "height-400";
				$scope.font = "font-40";
	        }
		}
	}
}]);
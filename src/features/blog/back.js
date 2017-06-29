blogModule.directive("back", ['states', function (states) {

	return {
		restrict:"E",
		scope:{
			font:"@"
		},
		replace:true,
		template:"<div class='absolute width height'><div class='absolute width height white-back opacity80 border rounded10 pointer'></div><div class='absolute center'>home</div></div>",
		link:function ($scope, element, attr) {

			element.first().addClass($scope.font);

			element.on("click", function () {

				states.go("home");

			});

		}
	}

}]);
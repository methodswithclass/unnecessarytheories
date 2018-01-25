blogModule.directive("section", ['global.service', 'events.service', function (g, events) {

	return {
		restrict:'E',
		scope:false,
		replace:true,
		template:'<div ng-include="getContentUrl()"></div>',
		link:function ($scope, element, attr) {

			$scope.getContentUrl = function() {
			
				var view;

				if (g.isMobile()) {

					view = "m.section.html";
				}
				else {
					view = "d.section.html";
				}

	            return 'assets/views/' + view;
	        }
			
		}
	}

}]);
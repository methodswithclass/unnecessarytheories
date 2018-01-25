blogModule.directive("section", ['global.service', 'events.service', function (g, events) {

	return {
		restrict:'E',
		scope:false,
		replace:true,
		template:'<div ng-include="getContentUrl()"></div>',
		link:function ($scope, element, attr) {

			$scope.getContentUrl = function() {

	            return 'assets/views/' + (g.isMobile() ? "m.section.html" : "d.section.html");
	        }
			
		}
	}

}]);
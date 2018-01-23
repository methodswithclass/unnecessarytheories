blogModule.directive("btn", ['$location', 'global', 'data.service', 'states', function ($location, g, blogs, states) {

	return {
		restrict:'E',
		scope:{
			data:"="
		},
		replace:false,
		template:'<div class="absolute width height" ng-include="getContentUrl()"></div>',
		link:function($scope, element, attr) {


			$scope.getContentUrl = function() {
			
				var view;

				if (g.isMobile()) {

					view = "m.btn.html";
				}
				else {
					view = "d.btn.html";
				}

	            return 'assets/views/' + view;
	        }


			if ($scope.data) {


				var spaceHeight = 0;

				$(".space").each(function (index) {
					spaceHeight + $(this).height();
				})

				var setButtonPosition = function () {

					var position = blogs.getButtonPosition($scope.data.meta.index);
					var width = $("#button-parent").width()/position.cols;

					var pageHeight = $(window).height();
					var headerHeight = $("#header").height();
					var footerHeight = $("#footer").height();
					var fillSpace = pageHeight*1.3 - headerHeight - footerHeight - spaceHeight;
					var buttonHeight = position.rows*width;

					$("#button-group").css({height:Math.max(buttonHeight, fillSpace)});

					//console.log("width: " + width);

					element.css({width:width, height:width, top:position.y*width, left:position.x*width});

				}
				
				setButtonPosition();

				$(window).resize(setButtonPosition);

				element.on("click", function () {

					console.log("clicked " + $scope.data.meta.name);

					states.go($scope.data.meta.name);

				});

			}

		}

	}
}]);
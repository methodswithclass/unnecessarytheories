FBuiModule.directive('fbparse', ['$window', function ($window) {

    return {
        restrict: 'A',
        scope: {},
        link: function postLink(scope, elem, attrs) {
            
            // $window.asyncFBInit();

            // FB.XFBML.parse(elem[0]);
        }
    };
}]);
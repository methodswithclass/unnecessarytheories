stateModule.provider("runtime.state", function ($stateProvider) {
  // runtime dependencies for the service can be injected here, at the provider.$get() function.

    var provider = {};

    var states = [
    {
        name:"home",
        url:"/home",
        template:"<div ng-include='getContentUrl()'></div>"
    },
    {
        name:"blog",
        url:"/blog/:name",
        template:"<div ng-include='getContentUrl()'></div>",
        controller:['$scope', 'global', '$stateParams', 'data.service', function ($scope, g, $stateParams, data) {

            console.log("name:", $stateParams.name);

            $scope.blog = data.getBlogByName($stateParams.name);

            $scope.getContentUrl = function() {
            
                var view;

                if (g.isMobile()) {

                    view = "m.blog.html";
                }
                else {
                    view = "d.blog.html";
                }

                return 'features/views/' + view;
            }

            $scope.url = data.env().url + '/?b=' + $scope.blog.meta.name;

            $("#body").scrollTo(0);

        }]
    },
    {
        name:"credits",
        url:"/credits",
        templateUrl:'features/views/d.credits.html'
    }
    ];

    var addState = function(state) { 

        console.log("add state",  state.name);

        $stateProvider.state(state);
    }

    provider.$get = ['send', '$location', 'data.service', 'global', '$state', function (send, $location, data, g, $state) {

      //console.log("get add state factory");

        var blogs = data.blogs;

        var service = function () {

            // console.log("create add state service");

            this.states = states;

            this.addState = addState;

        }

        return new service();
    
    }];

    provider.addState = addState;
    provider.states = states;

    return provider;
});
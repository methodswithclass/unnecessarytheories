stateModule.provider("runtime.state", ["$stateProvider", function ($stateProvider) {
  // runtime dependencies for the service can be injected here, at the provider.$get() function.

    var provider = {};

    var g = shared.utility_service;

    var states = [
    {
        name:"home",
        url:"",
        templateUrl:"assets/views/" + (g.isMobile() ? "m.home.html" : "d.home.html"),
        controller:"home.controller",
        controllerAs:"main"

    },
    {
        name:"blogs",
        url:"/blogs/:name",
        templateUrl:"assets/views/" + (g.isMobile() ? "m.piece.html" : "d.piece.html"),
        controller:"piece.controller",
        controllerAs:"main"
    },
    {
        name:"poetry",
        url:"/poetry/:name",
        templateUrl:"assets/views/" + (g.isMobile() ? "m.piece.html" : "d.piece.html"),
        controller:"piece.controller",
        controllerAs:"main"
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

    provider.$get = ['data.service', function (data) {

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
}]);
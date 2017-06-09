stateModule.factory("states", ['$q', 'runtime.state', '$state', '$rootScope', 'data.service', 'send', 'events', 'global', '$location', "$transitions", function ($q, runtime, $state, $rootScope, data, send, events, g, $location, $transitions) {

	var modalTime = 1000;

	var body = {};
	var elements = {};
	var bodyElem;
	var elem;
	var btn;

	var prevState;

	var states = runtime.states;

	var state;

	var blogs = data.blogs;

	send.setup.receiver({name:"body", receiver:body});
	send.setup.receiver({name:"blog", receiver:elements});

	var printParams = function(params) {

		var string = "";

		for (i in params) {

			string + "param " + i + " value " + params[i] + "\n";
		}

		console.log(string);
	}

	var getParams = function (absurl) {

		// var obj = {};

		// var url = absurl.split("?");

		// if (url.length > 1) {

		// 	var pairs = url[1].split("&");

		// 	var pairArray;

		// 	for (i in pairs) {

		// 		pairArray = pairs[i].split("=");

		// 		obj[pairArray[0]] = pairArray[1];

		// 	}

		// }

		// printParams(obj);

		// return obj;

		var obj = {};

		var url = absurl.split("/");

		if (url.length > 5) {

			// var pairs = url[1].split("&");

			// var pairArray;

			// for (i in pairs) {

			// 	pairArray = pairs[i].split("=");

				obj = url[4];

			// }

		}

		// printParams(obj);

		return obj;

	}

	var current = function () {

		return $state.current.name;
	}

	$transitions.onStart({}, function($trans) {

		//console.log(toState);	  

		events.dispatch("stateChange");

		prevState = $trans.$from().name;

		console.log("to state", $trans.$to().name);
	})

	// $rootScope.$on('$stateChangeSuccess', 
	// 	function(event, toState, toParams, fromState, fromParams) {

	// 		//console.log(toState);	  

	// 		events.dispatch("stateChange");

	// 		prevState = fromState;

	// 		console.log("to state", toState);
	// 	}
	// );

	var addState = function (name) {

		state = {

			name:"blog." + name,
			url:"/" + name

		};

		states.push(state);

		runtime.addState(state);
	}

	var checkInbound = function() {

		console.log("check inbound", $location.absUrl());

		var blog = getParams($location.absUrl());

		// console.log("params", params);

		// var blog = "none";

		// if (params.b) {
		// 	blog = params.b;
		// }

		send.setup.save({name:"inbound", data:blog});

		$state.go("home");
	}

	var define = function () {

		var blog = send.retrieve.get({name:"inbound"});

		if (runtime.isState(blog)) {
			return resolve(blog);
		}
		else {
			return reject(false);
		}

	}

	var splitStateName = function (state) {

		var name = state.name.split(".");

		return {
			type:name[0],
			state:name[1]
		}

	}

	var isState = function (name) {

        //var base = g.getBase();

        var stateObj;

        for (i in states) {

        	stateObj = splitStateName(states[i].name);  

        	if (name == stateObj.state) {
        		return true;
        	}
        }

        return false;
    }

    var go = function (state) {

    	if (data.isBlog(state)) {
    		console.log("state " + state);
    		$state.go("blog", {name:state});
    	}
    	else{
    		$state.go(state);
    	}
    }


    return {
    	current:current,
    	checkInbound:checkInbound,
    	define:define,
    	go:go
    }




}]);
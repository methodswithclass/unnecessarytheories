stateModule.factory("states", ['$q', 'runtime.state', '$state', '$rootScope', 'data.service', 'send.service', 'events.service', 'global.service', '$location', "$transitions", function ($q, runtime, $state, $rootScope, data, send, events, g, $location, $transitions) {


	var shared = window.shared;
    var g = shared.utility_service;
    var send = shared.send_service;
    var react = shared.react_service;
    var events = shared.events_service;



	var modalTime = 1000;
	var prevState;
	var states = runtime.states;
	var state;
	var blogs = data.blogs;

	var blogUrlIndex = function (url) {

		return url.length-2;
	}



	var getParams = function (absurl) {

		var obj = "";
		var urlArray = absurl.split("/");
		var index = absurl.indexOf("?");

		if (index >= 0) {

			obj = absurl.substr(index + 3);
		}
		else if (urlArray.length >= 1) {

			obj = urlArray[blogUrlIndex(urlArray)];
		}

		console.log("check returns:", obj);

		return obj

	}

	var checkInbound = function() {

		console.log("check inbound for url", $location.absUrl());

		var param = getParams($location.absUrl());

		param = data.resolveName(param);

		if (data.isBlog(param)) {

			send.setup.save({name:"navigate", data:param});

			var blogObj = data.getBlogByName(param);

			console.log("check inbound go blog", param);

			go(param, blogObj.meta.genre);

		}
		else {
			console.log("check inbound go home", "home");
			go("home");
		}

		
	}

	
	var current = function () {

		return $state.current.name;
	}

	$transitions.onStart({}, function($trans) {

		//console.log(toState);	  

		events.dispatch("stateChange");

		prevState = $trans.$from().name;

		console.log("to state", $trans.$to());
	});

	$transitions.onSuccess({}, function ($trans) {


		console.log("change state success, to state", $trans.$to().name);

	})

	var addState = function (state) {

		state = {

			name:state.name,
			url:state.url,
			templateUrl:state.templateUrl,
			controller:state.controller,
			controllerAs:"main"

		};

		states.push(state);

		runtime.addState(state);
	}

	var define = function () {

		var bl = send.retrieve.get({name:"navigate"});

		var blog = bl[bl.length-1];

		if (runtime.isState(blog)) {
			return resolve(blog);
		}
		else {
			return reject(false);
		}

	}

	var splitStateName = function (state) {

		var name = state.name.split(".");

		if (name.length > 1) {

			return {
				type:name[0],
				state:name[1]
			}

		}
		else {
			return {
				state:name
			}
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

    var go = function (state, genre) {

    	console.log("change state to", state);

    	if (data.isBlog(state)) {
    		console.log("state is blog", state);
    		$state.go(genre, {name:state});
    	}
    	// else if (data.isGenre(state)) {
    	// 	console.log("state is genre", state);
    	// 	$state.go("home." + state);
    	// }
    	else{
    		console.log("state is not blog", state);
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
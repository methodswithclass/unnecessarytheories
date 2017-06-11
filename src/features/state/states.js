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

		var obj = "home";

		var url = absurl.split("/");

		if (url.length > 5) {

			obj = url[4];
		}

		console.log("check returns:", obj);

		return obj;

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

	var addState = function (name) {

		state = {

			name:"blog." + name,
			url:"/" + name

		};

		states.push(state);

		runtime.addState(state);
	}

	var checkInbound = function() {

		console.log("check inbound for url", $location.absUrl());

		var blog = getParams($location.absUrl());

		send.setup.save({name:"inbound", data:blog});

		// console.log("go to blog", blog);

		go(blog);
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

    	console.log("change state to", state);

    	if (data.isBlog(state)) {
    		console.log("state is blog", state);
    		$state.go("blog", {name:state});
    	}
    	else{
    		console.log("state is not blog:", state);
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
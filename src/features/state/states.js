stateModule.factory("states", ['$q', 'runtime.state', '$state', '$rootScope', 'data.service', 'send.service', 'events.service', 'global.service', '$location', "$transitions", function ($q, runtime, $state, $rootScope, data, send, events, g, $location, $transitions) {

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

	var blogUrlIndex = function (url) {


		// return url[0] == "http:" ? 4 : 2;
		return url.length-2;
	};

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

		console.log("url array", url);

		if (url.length >= blogUrlIndex(url)+1) {

			obj = url[blogUrlIndex(url)];
		}

		console.log("check returns:", obj);

		return obj

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

		var param = getParams($location.absUrl());

		if (data.isBlog(param)) {

			send.setup.save({name:"navigate", data:param});

			var blogObj = data.getBlogByName(param);

			console.log("check inbound go blog", param);

			go(param, blogObj.meta.genre);

		}
		else if (data.isGenre(param)) {
			// go("home");
			console.log("check inbound go genre", param);
			go(param);
		}
		else {
			console.log("check inbound go home", "home");
			go("home");
		}

		
	}

	var define = function () {

		var blog = send.retrieve.get({name:"navigate"});

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

    var go = function (state, genre) {

    	console.log("change state to", state);

    	if (data.isBlog(state)) {
    		console.log("state is blog", state);
    		$state.go(genre, {name:state});
    	}
    	else if (data.isGenre(state)) {
    		console.log("state is genre", state);
    		$state.go("home." + state);
    	}
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
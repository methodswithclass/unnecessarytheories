blogModule.controller("genre.controller", ['$scope', 'data.service', 'runtime.state', 'states', '$state', '$window', 'events.service', '$location', 'global.service', 'send.service', 'display.service', function ($scope, data, runtime, states, $state, $window, events, $location, g, send, display) {


	var self = this;

	console.log("enter genre controller");


	var state = states.current();
	console.log("current state is", state);
	var genreArray = state.split(".");
	console.log("genre array is", genreArray);
	self.genre = genreArray[1]; 

	console.log("enter genre", self.genre, "controller");


	self.genreBlogs = data.getBlogsByGenre(self.genre);

	console.log("genre blogs length", self.genreBlogs.length);


	// self.params = {
	// 	factor:1,
	// 	x1:-100,
	// 	y1:1,
	// 	x2:1,
	// 	y2:1
	// }

	var xBuffer = 100;
	var yBuffer = 10;


	self.getParams = function () {

		self.params = {};

		var element = $("#genre_button" + self.genreBlogs[0].meta.name);
		var inner = $("#genre_thumb" + self.genreBlogs[0].meta.name);

		var getValue = function ($value) {

			self.params = $value;
		}

		g.waitForElem({elems:["#body", element, inner], callback:getValue}, function (options) {


			var sh = element.height();
			var ph = inner.height();

			params = {};

			params.factor = 1;
			params.x1 = (-1)*xBuffer;
			params.x2 = $("#body").height() + xBuffer;
			params.y1 = (-1)*yBuffer;
			params.y2 = (-1)*Math.abs(ph-sh) + yBuffer;


			options.callback(params);

		})

	}


	self.blogClick = function (blog) {

		console.log("blog clicked", self.genre, blog);

		send.setup.save({name:"navigate", data:blog});

		console.log("blog is", blog);

		// $state.go(".piece" + self.genre, {name:blog});
		states.go(blog, self.genre);
	}


	// $("#body").scrollTo(0);


}]);
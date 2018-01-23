blogModule.controller("genre.controller", ['$scope', 'data.service', 'runtime.state', 'states', '$state', '$window', 'events', '$location', 'global', 'send', 'display.service', function ($scope, data, runtime, states, $state, $window, events, $location, g, send, display) {


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


	self.blogClick = function (blog) {

		console.log("blog clicked", self.genre, blog);

		send.setup.save({name:"navigate", data:blog});

		console.log("blog is", blog);

		// $state.go(".piece" + self.genre, {name:blog});
		states.go(blog, self.genre);
	}


	// $("#body").scrollTo(0);


}]);
blogModule.controller("piece.controller", ['$scope', 'data.service', 'runtime.state', 'states', '$state', '$window', 'events', '$location', 'global', 'send', 'display.service', function ($scope, data, runtime, states, $state, $window, events, $location, g, send, display) {


	var self = this;

	console.log("enter piece controller");


	display.adjustImageSize();

	// var inboundBlog = send.retrieve.get({name:"inbound"})[0];
	var bl = send.retrieve.get({name:"navigate"});


	console.log("blo navigate", bl[bl.length-1]);

	// $scope.blog = (data.isBlog(inboundBlog) ? data.getBlogByName(inboundBlog) 
	               // : (data.isBlog(navigateBlog) ? data.getBlogByName(navigateBlog) : data.getBlogByIndex(0)));

	$scope.blog = data.getBlogByName(bl[bl.length-1]);


	console.log("blog in controller is:", $scope.blog);


	$("#body").scrollTo(0);

}]);
blogModule.controller("piece.controller", ['$scope', 'data.service', 'runtime.state', 'states', '$state', '$window', 'events', '$location', 'global', 'send', 'display.service', function ($scope, data, runtime, states, $state, $window, events, $location, g, send, display) {


	var self = this;

	console.log("enter piece controller");


	display.adjustImageSize();


	var bl = send.retrieve.get({name:"navigate"});

	var blogName = bl[bl.length-1];

	console.log("blo navigate", blogName);


	$scope.blog = data.getBlogByName(blogName);

	console.log("$scope.blog", $scope.blog, $scope.blog.meta.title.s.text);

	$scope.url = $scope.blog.share.facebook.url;

	console.log("blog in controller is:", $scope.blog);

	var disqus_config = function () {

		var env = data.env();


        this.page.url = env.url;  // Replace PAGE_URL with your page's canonical URL variable
       	this.page.identifier = blogname + "identifier";
    }

	// $window.fbAsyncInit();

	$("#body").scrollTo(0);

}]);
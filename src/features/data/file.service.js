dataModule.factory("file.service", ['$http', function ($http) {

	var files = [];
	var blogs = [];

	var clean = function (string) {

  		return string.replace(/[‘’]/g, "\'").replace(/[“”]/g, "\'").replace(/(?!\.)(.)\1{2,}/g, "$1");
  	}

	var make = function (string) {

		var section = [];
		var blog = [];
		var array = string.split("\n\n");
		var j = 0;
		var k = 0;
		var list = false;

		for (i in array) {
			if (array[i] == ".") {
				
				blog[k++] = section;

				section = [];
				j = 0;
			}
			else if (array[i] == "#") {
				list = !list;
			}
			else {
				section[j++] = {para:list ? "list" : "para", text:array[i]};
			}
		}

		blog[blog.length] = section;

		return blog;
	}

	var process = function (url, complete) {

		console.log(url);

		$http({url:url})
		.then(function (response) {
			var data = response.data;
			var cleanData = clean(data);
			files[files.length] = cleanData;
			return cleanData;
		})
		.then(function (data) {
			// console.log(data);
			var blog = make(data);
			console.log(blog);
			blogs[blogs.length] = blog;
			return blog;
		})
		.then(complete);
		
	}

	return {
		process:process
	}

}]);
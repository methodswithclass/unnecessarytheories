dataModule.factory("data.service", ['global', 'file.service', function (g, file) {

	var testOverride = false;

	var dev = {
		test:true,
		url:'http://unecessarytheories-dev.herokuapp.com/',
		id:'725062234262184'
	}

	var prod = {
		test:false,
		url:'http://unecessarytheories-dev.herokuapp.com/',
		// url:"localhost:8080/",
		id:'696572137111194'
	}

	var env = function (_test) {

		return _test ? (_test ? dev : prod) : (testOverride ? dev : prod);
	}

	var fonts = {
		button:{
			d:"font-15",
			m:"font-30"
		},
		blog:{
			d:"font-50",
			m:"font-50"
		}
	}

	var published = {
		none:false,
		prison:true,
		scale_time:true,
		meaning_god:false,
		intelligence:true,
		vase:true,
		online_dating:true,
		girl:true,
		contact:true,
		perspective:true
	}

	var home = {
		meta:{
			name:"home",
			title:"unecessary theories",
			image:"assets/img/landscape"
		},
		share:{
			description:"here are some theories, probably unecessary"
		}
	}


	var allblogs = [
	{
		meta:{
			date:new Date(2016, 0, 7, 12, 0, 0),
			by:"Christopher Polito",
			name:"intelligence",
			title:{
				s:{
					text:"intelligence",
					font:{
						button:{
							d:fonts.button.d,
							m:fonts.button.m
						},
						blog:{
							d:fonts.blog.d,
							m:fonts.blog.m
						}
					}
				},
				l:{
					text:"Are we smart when we can't define the things we make up? And those things actually hurt us?"
				}
			},
			image:'assets/img/machine',
			file:"files/intelligence.txt",
			published:published.intelligence
		},
		twitter:{
			description:"It's a good thing we are smart enough to make up something like intelligence."
		}
	},
	{
		meta:{
			date:new Date(2015, 11, 22, 12, 0, 0),
			by:"Christopher Polito",
			name:"prison",
			title:{
				s:{
					text:"the prison",
					font:{
						button:{
							d:fonts.button.d,
							m:fonts.button.m
						},
						blog:{
							d:fonts.blog.d,
							m:fonts.blog.m
						}
					}
				},
				l:{
					text:"Even prisons with three walls are impossible to break free from"
				}
			},
			image:'assets/img/corridor',
			file:"files/prison.txt",
			published:published.prison
		},
		twitter:{
			description:"You're in a prison you can't see because you're distracted by all the writing on the wall"
		}
	},
	{
		meta:{
			date:new Date(2015, 11, 22, 12, 0, 0),
			by:"Christopher Polito",
			name:"scale_time",
			title:{
				s:{
					text:"scale of time",
					font:{
						button:{
							d:fonts.button.d,
							m:fonts.button.m
						},
						blog:{
							d:fonts.blog.d,
							m:fonts.blog.m
						}
					}
				},
				l:{
					text:"The realities of time are not all that friendly to our visions of sci-fi"
				}
			},
			image:'assets/img/relativity',
			file:"files/scale_time.txt",
			published:published.scale_time
		},
		twitter:{
			description:"Time has no scale, but the implications do"
		}
	},
	{
		meta:{
			date:new Date(2016, 0, 1, 12, 0, 0),
			by:"Christopher Polito",
			name:"meaning_god",
			title:{
				s:{
					text:"meaning of god",
					font:{
						button:{
							d:fonts.button.d,
							m:fonts.button.m
						},
						blog:{
							d:fonts.blog.d,
							m:fonts.blog.m
						}
					}
				},
				l:{
					text:"I don't care whether god exists or not, but what does the concept mean?"
				}
			},
			image:'assets/img/space',
			file:"files/meaning_god.txt",
			published:published.meaning_god
		},
		twitter:{
			description:"the existence of god is irrelevant, but the meaning isn\'t"
		}
	},
	{
		meta:{
			date:new Date(2016, 7, 21, 6, 0, 0),
			by:"Christopher Polito",
			name:"vase",
			title:{
				s:{
					text:"vase of the world",
					font:{
						button:{
							d:fonts.button.d,
							m:fonts.button.m
						},
						blog:{
							d:fonts.blog.d,
							m:fonts.blog.m
						}
					}
				},
				l:{
					text:"Caution to you, when you create in order to relieve, you know not what you make"
				}
			},
			image:'assets/img/cavemen',
			file:"files/vaseoftheworld.txt",
			published:published.vase
		},
		twitter:{
			description:"Be careful what you create, you know not what it can become"
		}
	},
	{
		meta:{
			date:new Date(2016, 09, 01, 6, 0, 0),
			by:"Christopher Polito",
			name:"online_dating",
			title:{
				s:{
					text:"online dating",
					font:{
						button:{
							d:fonts.button.d,
							m:fonts.button.m
						},
						blog:{
							d:fonts.blog.d,
							m:fonts.blog.m
						}
					}
				},
				l:{
					text:"Online dating is not a fun activity, so I wrote some poetry about it."
				}
			},
			image:'assets/img/online-date',
			file:"files/online-date.txt",
			published:published.online_dating
		},
		twitter:{
			description:"Online dating is not a fun activity, so I wrote some poetry about it."
		}
	},
	{
		meta:{
			date:new Date(2016, 09, 30, 6, 0, 0),
			by:"Christopher Polito",
			name:"girl",
			title:{
				s:{
					text:"girl on the path",
					font:{
						button:{
							d:fonts.button.d,
							m:fonts.button.m
						},
						blog:{
							d:fonts.blog.d,
							m:fonts.blog.m
						}
					}
				},
				l:{
					text:"I was lost in a world of my own thinking thoughts, then I came upon her, and she connected the dots."
				}
			},
			image:'assets/img/girl',
			file:"files/girl_on_path.txt",
			published:published.girl
		},
		twitter:{
			description:"I was lost in a world of my own thinking thoughts, then I came upon her, and she connected the dots."
		}
	},
	{
		meta:{
			date:new Date(2016, 10, 15, 6, 0, 0),
			by:"Christopher Polito",
			name:"contact",
			title:{
				s:{
					text:"the impossibility of alien contact",
					font:{
						button:{
							d:"font-15",
							m:fonts.button.m
						},
						blog:{
							d:"font-40",
							m:"font-30"
						}
					}
				},
				l:{
					text:"The science fiction community has done our culture an immense disservice by making possible what is perfectly implausible"
				}
			},
			image:'assets/img/contact',
			file:"files/alien_contact2.txt",
			published:published.contact
		},
		twitter:{
			description:"The science fiction community has done our culture an immense disservice by making possible what is perfectly implausible"
		}
	},
	{
		meta:{
			date:new Date(2016, 10, 16, 6, 0, 0),
			by:"Christopher Polito",
			name:"perspective",
			title:{
				s:{
					text:"perspective",
					font:{
						button:{
							d:fonts.button.d,
							m:fonts.button.m
						},
						blog:{
							d:fonts.blog.d,
							m:fonts.blog.m
						}
					}
				},
				l:{
					text:"For the stone and the mote, the grass is always greener..."
				}
			},
			image:'assets/img/dust',
			file:"files/mote.txt",
			published:published.perspective
		},
		twitter:{
			description:"For the stone and the mote, the grass is always greener..."
		}
	}
	];

	allblogs.sort(function (a,b) {

		return a.meta.date.getTime() - b.meta.date.getTime();
	});

	var blogs = allblogs.filter(function (blog, index, array) {

		var now = new Date();

		return (blog.meta.date.getTime() < now.getTime() && blog.meta.published && !published.none);

	});

	blogs.forEach(function (value, index, array) {

		value.meta.index = index;

		file.process(value.meta.file, function (blog) {
			value.content = blog;
		});

	});

	var getBlogByIndex = function (index) {

		return blogs[index];
	}

	var getIndexByName = function (name) {

		for (i in blogs) {
			if (name == blogs[i].meta.name) {
				return i;
			}
		}

		return -1;
	}

	var resolveIndex = function (index) {

		if (index >= 0 && index < blogs.length) {
			return true;
		}
		return false;
	}

	var getBlogByName = function (name) {

		if (name == "home") {

			return home;
		}
		else {

			var index = getIndexByName(name);

			if (resolveIndex(index)) return getBlogByIndex(index);
			else console.log("invalid name");
		}

	}

	var isBlog = function (name) {

		var index = getIndexByName(name);

		return resolveIndex(index);
	}

	var getButtonPosition = function (index) {

		var cols = blogs.length <= 3 ? 2 : 3;
		cols = 2;
		cols = g.isMobile() ? 1 : cols;
		var rowsFrac = blogs.length/cols;
		// var rows = rowsFrac % cols == 0 ? rowsFrac : rowsFrac + 1;
		var rows = rowsFrac + 1;

		//console.log("rows " + rows);

		return {x:index % cols, y:Math.floor(index/cols), cols:cols, rows:rows};

	}

	return {
		env:env,
		home:home,
		blogs:blogs,
		getBlogByName:getBlogByName,
		getBlogByIndex:getBlogByIndex,
		isBlog:isBlog,
		resolveIndex:resolveIndex,
		getButtonPosition:getButtonPosition
	}

}]);
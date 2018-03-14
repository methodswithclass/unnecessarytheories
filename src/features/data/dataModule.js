var dataModule = angular.module("dataModule", []);




	// var archive = [
	// {
	// 	meta:{
	// 		date:new Date(2015, 11, 22, 12, 0, 0),
	// 		by:"Christopher Polito",
	// 		name:"scale_time",
	// 		genre:genres.nonFict,
	// 		title:{
	// 			s:{
	// 				text:"scale of time",
	// 				font:{
	// 					button:{
	// 						d:fonts.button.d,
	// 						m:fonts.button.m
	// 					},
	// 					blog:{
	// 						d:fonts.blog.d,
	// 						m:fonts.blog.m
	// 					}
	// 				}
	// 			},
	// 			l:{
	// 				text:"The realities of time are not all that conducive with our sci-fi dreams"
	// 			}
	// 		},
	// 		image:'img/relativity',
	// 		file:"files/scale_time.txt",
	// 		published:published.scale_time
	// 	},
	// 	twitter:{
	// 		description:"Time has no scale, but the implications do"
	// 	},
	// 	facebook:{
	// 		url:env().url + genres.nonFict + "/scale_time"
	// 	}
	// },
	// {
	// 	meta:{
	// 		date:new Date(2016, 0, 1, 12, 0, 0),
	// 		by:"Christopher Polito",
	// 		name:"meaning_god",
	// 		genre:genres.nonFict,
	// 		title:{
	// 			s:{
	// 				text:"meaning of god",
	// 				font:{
	// 					button:{
	// 						d:fonts.button.d,
	// 						m:fonts.button.m
	// 					},
	// 					blog:{
	// 						d:fonts.blog.d,
	// 						m:fonts.blog.m
	// 					}
	// 				}
	// 			},
	// 			l:{
	// 				text:"I don't care whether god exists or not, but what does the concept mean?"
	// 			}
	// 		},
	// 		image:'img/space',
	// 		file:"files/meaning_god.txt",
	// 		published:published.meaning_god
	// 	},
	// 	twitter:{
	// 		description:"the existence of god is irrelevant, but the meaning isn't"
	// 	},
	// 	facebook:{
	// 		url:env().url + genres.nonFict + "/meaning_god"
	// 	}
	// },
	// {
	// 	meta:{
	// 		date:new Date(2018, 2, 11, 12, 0, 0),
	// 		by:"Christopher Polito",
	// 		name:"evolution",
	// 		genre:genres.nonFict,
	// 		title:{
	// 			s:{
	// 				text:"There's no 'selection' in Evolution",
	// 				font:{
	// 					button:{
	// 						d:fonts.button.d,
	// 						m:fonts.button.m
	// 					},
	// 					blog:{
	// 						d:fonts.blog.d,
	// 						m:fonts.blog.m
	// 					}
	// 				}
	// 			},
	// 			l:{
	// 				text:"There's no 'selection' in Evolution, you've been mislead, and now it's time to know the truth"
	// 			}
	// 		},
	// 		image:'img/evolution_2',
	// 		file:"files/evolution.txt",
	// 		published:published.evolution
	// 	},
	// 	twitter:{
	// 		description:"There's no 'selection' in Evolution, you've been mislead, and now it's time to know the truth"
	// 	},
	// 	facebook:{
	// 		url:env().url + genres.nonFict + "/evolution"
	// 	}
	// },
	// {
	// 	meta:{
	// 		date:new Date(2018, 0, 23, 12, 0, 0),
	// 		by:"Christopher Polito",
	// 		name:"extraterrestrial_life",
	// 		genre:genres.nonFict,
	// 		title:{
	// 			s:{
	// 				text:"extraterrestrial life",
	// 				font:{
	// 					button:{
	// 						d:fonts.button.d,
	// 						m:fonts.button.m
	// 					},
	// 					blog:{
	// 						d:fonts.blog.d,
	// 						m:fonts.blog.m
	// 					}
	// 				}
	// 			},
	// 			l:{
	// 				text:"Do you image aliens as our counterparts, but just slightly different? Think again. The differences are most probably so basic and fundamental that they will make you question your own existence."
	// 			}
	// 		},
	// 		image:'img/extraterrestrial-life5',
	// 		file:"files/extraterrestrial-life2.txt",
	// 		published:published.extraterrestrial_life
	// 	},
	// 	twitter:{
	// 		description:"Sci-Fi has unfortunately taught us many terrible lessons about the possibilities for alien life and has put us all in a small mental box. Even trained scientists are not often free from sci-fi's gripping influence."
	// 	},
	// 	facebook:{
	// 		url:env().url + genres.nonFict + "/extraterrestrial_life"
	// 	}
	// },
	// {
	// 	meta:{
	// 		date:new Date(2016, 0, 7, 12, 0, 0),
	// 		by:"Christopher Polito",
	// 		name:"intelligence",
	// 		genre:genres.nonFict,
	// 		title:{
	// 			s:{
	// 				text:"intelligence",
	// 				font:{
	// 					button:{
	// 						d:fonts.button.d,
	// 						m:fonts.button.m
	// 					},
	// 					blog:{
	// 						d:fonts.blog.d,
	// 						m:fonts.blog.m
	// 					}
	// 				}
	// 			},
	// 			l:{
	// 				text:"How can we, as humans, be so intelligent when we can't define intelligence?"
	// 			}
	// 		},
	// 		image:'img/machine',
	// 		file:"files/intelligence2.txt",
	// 		published:published.intelligence
	// 	},
	// 	twitter:{
	// 		description:"It's a good thing we are smart enough to make up something like intelligence."
	// 	},
	// 	facebook:{
	// 		url:env().url + genres.nonFict + "/intelligence"
	// 	}
	// },
	// {
	// 	meta:{
	// 		date:new Date(2016, 7, 21, 6, 0, 0),
	// 		by:"Christopher Polito",
	// 		name:"vase",
	// 		genre:genres.poetry,
	// 		title:{
	// 			s:{
	// 				text:"vase of the world",
	// 				font:{
	// 					button:{
	// 						d:fonts.button.d,
	// 						m:fonts.button.m
	// 					},
	// 					blog:{
	// 						d:fonts.blog.d,
	// 						m:fonts.blog.m
	// 					}
	// 				}
	// 			},
	// 			l:{
	// 				text:"Caution to you, when you create in order to relieve, you know not what you make"
	// 			}
	// 		},
	// 		image:'img/cavemen',
	// 		file:"files/vaseoftheworld.txt",
	// 		published:published.vase
	// 	},
	// 	twitter:{
	// 		description:"Be careful what you create, you know not what it can become"
	// 	},
	// 	facebook:{
	// 		url:env().url + genres.poetry + "/vase"
	// 	}
	// },
	// {
	// 	meta:{
	// 		date:new Date(2016, 09, 01, 6, 0, 0),
	// 		by:"Christopher Polito",
	// 		name:"online_dating",
	// 		genre:genres.poetry,
	// 		title:{
	// 			s:{
	// 				text:"online dating",
	// 				font:{
	// 					button:{
	// 						d:fonts.button.d,
	// 						m:fonts.button.m
	// 					},
	// 					blog:{
	// 						d:fonts.blog.d,
	// 						m:fonts.blog.m
	// 					}
	// 				}
	// 			},
	// 			l:{
	// 				text:"Online dating is not a fun activity, so I wrote some poetry about it."
	// 			}
	// 		},
	// 		image:'img/online-date',
	// 		file:"files/online-date.txt",
	// 		published:published.online_dating
	// 	},
	// 	twitter:{
	// 		description:"Online dating is not a fun activity, so I wrote some poetry about it."
	// 	},
	// 	facebook:{
	// 		url:env().url + genres.poetry + "/online_dating"
	// 	}
	// },
	// 	{
	// 	meta:{
	// 		date:new Date(2016, 09, 30, 6, 0, 0),
	// 		by:"Christopher Polito",
	// 		name:"girl",
	// 		genre:genres.poetry,
	// 		title:{
	// 			s:{
	// 				text:"girl on the path",
	// 				font:{
	// 					button:{
	// 						d:fonts.button.d,
	// 						m:fonts.button.m
	// 					},
	// 					blog:{
	// 						d:fonts.blog.d,
	// 						m:fonts.blog.m
	// 					}
	// 				}
	// 			},
	// 			l:{
	// 				text:"I was lost in a world of my own thinking thoughts, then I came upon her, and she connected the dots."
	// 			}
	// 		},
	// 		image:'img/girl',
	// 		file:"files/girl_on_path.txt",
	// 		published:published.girl
	// 	},
	// 	twitter:{
	// 		description:"I was lost in a world of my own thinking thoughts, then I came upon her, and she connected the dots."
	// 	},
	// 	facebook:{
	// 		url:env().url + genres.poetry + "/girl"
	// 	}
	// },
	// {
	// 	meta:{
	// 		date:new Date(2016, 10, 15, 6, 0, 0),
	// 		by:"Christopher Polito",
	// 		name:"contact",
	// 		genre:genres.nonFict,
	// 		title:{
	// 			s:{
	// 				text:"the impossibility of alien contact",
	// 				font:{
	// 					button:{
	// 						d:"font-15",
	// 						m:fonts.button.m
	// 					},
	// 					blog:{
	// 						d:"font-40",
	// 						m:"font-30"
	// 					}
	// 				}
	// 			},
	// 			l:{
	// 				text:"The science fiction community has done our culture an immense disservice by making possible what is perfectly implausible. What's wrong is that it has affected real scientific research endeavors."
	// 			}
	// 		},
	// 		image:'img/contact',
	// 		file:"files/alien-contact3.txt",
	// 		published:published.contact
	// 	},
	// 	twitter:{
	// 		description:"The science fiction community has done our culture an immense disservice by making possible what is perfectly implausible"
	// 	},
	// 	facebook:{
	// 		url:env().url + genres.nonFict + "/contact"
	// 	}
	// },
	// {
	// 	meta:{
	// 		date:new Date(2016, 10, 16, 6, 0, 0),
	// 		by:"Christopher Polito",
	// 		name:"perspective",
	// 		genre:genres.poetry,
	// 		title:{
	// 			s:{
	// 				text:"perspective",
	// 				font:{
	// 					button:{
	// 						d:fonts.button.d,
	// 						m:fonts.button.m
	// 					},
	// 					blog:{
	// 						d:fonts.blog.d,
	// 						m:fonts.blog.m
	// 					}
	// 				}
	// 			},
	// 			l:{
	// 				text:"For the stone and the mote, the grass is always greener..."
	// 			}
	// 		},
	// 		image:'img/dust',
	// 		file:"files/mote.txt",
	// 		published:published.perspective
	// 	},
	// 	twitter:{
	// 		description:"For the stone and the mote, the grass is always greener..."
	// 	},
	// 	facebook:{
	// 		url:env().url + genres.poetry + "/perspective"
	// 	}
	// },
	// {
	// 	meta:{
	// 		date:new Date(2015, 11, 22, 12, 0, 0),
	// 		by:"Christopher Polito",
	// 		name:"prison",
	// 		genre:genres.poetry,
	// 		title:{
	// 			s:{
	// 				text:"the prison",
	// 				font:{
	// 					button:{
	// 						d:fonts.button.d,
	// 						m:fonts.button.m
	// 					},
	// 					blog:{
	// 						d:fonts.blog.d,
	// 						m:fonts.blog.m
	// 					}
	// 				}
	// 			},
	// 			l:{
	// 				text:"Even prisons with three walls are impossible to break free from"
	// 			}
	// 		},
	// 		image:'img/prison',
	// 		file:"files/prison.txt",
	// 		published:published.prison
	// 	},
	// 	twitter:{
	// 		description:"You're in a prison you can't see because you're distracted by all the writing on the wall"
	// 	},
	// 	facebook:{
	// 		url:env().url + genres.poetry + "/prison"
	// 	}
	// }
	// ]









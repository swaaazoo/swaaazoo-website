var myWebsite = angular.module('myWebsite', ['ngRoute']);

myWebsite.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html'
	})
	.when('/about', {
		templateUrl: 'partials/about.html'
	})
	.when('/javascript', {
		templateUrl: 'partials/javascript.html'
	})
	.when('/balls', {
		templateUrl: 'partials/colliding_balls.html'
	})
	.when('/frontend', {
		templateUrl: 'partials/frontend.html'
	})
	.when('/php', {
		templateUrl: 'partials/php.html'
	})
	.when('/ruby', {
		templateUrl: 'partials/ruby.html'
	})
	.when('/mean', {
		templateUrl: 'partials/mean.html'
	})
	.otherwise({
		redirectTo: '/'
	});

});

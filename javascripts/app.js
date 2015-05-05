var myWebsite = angular.module('myWebsite', ['ngRoute']);

myWebsite.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html'
	})
	.when('/about', {
		templateUrl: 'partials/about.html'
	})
	.when('/portfolio', {
		templateUrl: 'partials/portfolio.html'
	})
	.otherwise({
		redirectTo: '/'
	});

});

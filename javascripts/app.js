var myWebsite = angular.module('myWebsite', ['ngRoute']);

myWebsite.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html'
	})
	.when('/about', {
		templateURL: 'partials/about.html'
	})

});

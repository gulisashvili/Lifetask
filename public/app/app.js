var app = angular.module('TodoApp', ['ngResource', 'ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider
		.when('/', {
			templateUrl: '/partials/main',
			controller: 'MainCTRL'
		});
});

app.controller('MainCTRL', function($scope) {
	$scope.data = {
		name: 'levani',
		age: 21
	};

});

var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'BiotecController'
		})
		.when('/menu', {
			templateUrl: 'views/menu.html',
			controller: 'BiotecController'
		})
		.when('/takePhoto', {
			templateUrl: 'views/takePhoto.html',
			controller: 'BiotecController'
		})
		.when('/explore', {
			templateUrl: 'views/exploreBiotec.html',
			controller: 'BiotecController'
		})
		.when('/alimentar', {
			templateUrl: 'views/alimentar.html',
			controller: 'BiotecController'
		})
		.when('/ambiente', {
			templateUrl: 'views/ambiente.html',
			controller: 'BiotecController'
		})
		.when('/saude', {
			templateUrl: 'views/saude.html',
			controller: 'BiotecController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});

mainApp.controller('BiotecController', function($scope) {
	
	$scope.students = [
		{name: 'Mark Waugh', city:'New York'},
		{name: 'Steve Jonathan', city:'London'},
		{name: 'John Marcus', city:'Paris'}
	];

	$scope.touchHere = "Toque aqui";
	$scope.takePhoto = "Tirar uma foto";
	$scope.exploreBiotec = "Explorar a Biotecnologia";
});
'use strict'

require('angular/angular');
// require('angular-route');

var HarryApp = angular.module('HarryApp', [require('angular-route')]);

//controllers
require('./HarryApp/controllers/homecontroller')(HarryApp);
require('./HarryApp/controllers/aboutcontroller')(HarryApp);
require('./HarryApp/controllers/warscontroller')(HarryApp);
require('./HarryApp/controllers/pottercontroller')(HarryApp);
require('./HarryApp/controllers/trekcontroller')(HarryApp);
require('./HarryApp/controllers/treecontroller')(HarryApp);
require('./HarryApp/controllers/sudokucontroller')(HarryApp);

//filters

//services

//directives

//routes
HarryApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/views/HarryApp/home.html',
			controller: 'homecontroller'
		})
		.when('/about', {
			templateUrl: '/views/HarryApp/about.html',
			controller: 'aboutcontroller'
		})
		.when('/startrek', {
			templateUrl: '/views/HarryApp/startrek.html',
			controller: 'trekcontroller'
		})
		.when('/harrypotter', {
			templateUrl: '/views/HarryApp/harrypotter.html',
			controller: 'pottercontroller'
		})
		.when('/starwars', {
			templateUrl: '/views/HarryApp/starwars.html',
			controller: 'warscontroller'
		})
		.when('/binarytree', {
			templateUrl: '/views/HarryApp/binarytree.html',
			controller: 'treecontroller'
		})
		.when('/sudoku', {
			templateUrl: '/views/HarryApp/sudoku.html',
			controller: 'sudokucontroller'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);
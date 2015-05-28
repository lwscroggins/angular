require('angular/angular');
var _ = require('lodash');


var HarryApp = angular.module('HarryApp', [require('angular-route')]);

//controllers
require('./HarryApp/controllers/maincontroller')(HarryApp);
require('./HarryApp/controllers/homecontroller')(HarryApp);
require('./HarryApp/controllers/aboutcontroller')(HarryApp);
require('./HarryApp/controllers/resumecontroller')(HarryApp);
require('./HarryApp/controllers/pottercontroller')(HarryApp);
require('./HarryApp/controllers/fancontroller')(HarryApp);
require('./HarryApp/controllers/treecontroller')(HarryApp);
require('./HarryApp/controllers/sudokucontroller')(HarryApp);

//filters

//services aka factories

//directives
require('./HarryApp/directives/headdirective')(HarryApp);
require('./HarryApp/directives/indexdirective')(HarryApp);
require('./HarryApp/directives/treedirective')(HarryApp);

//routes
HarryApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/views/HarryApp/home.html',
			controller: 'homecontroller',
			css: 'css/homecss.css'
		})
		.when('/about', {
			templateUrl: '/views/HarryApp/about.html',
			controller: 'aboutcontroller',
			css: 'css/aboutcss.css'
		})
		.when('/fandom', {
			templateUrl: '/views/HarryApp/fandom.html',
			controller: 'fancontroller',
			css: 'css/fancss.css'
		})
		.when('/harrypotter', {
			templateUrl: '/views/HarryApp/harrypotter.html',
			controller: 'pottercontroller',
			css: 'css/pottercss.css'
		})
		.when('/resume', {
			templateUrl: '/views/HarryApp/resume.html',
			controller: 'resumecontroller',
			css: 'css/resumecss.css'
		})
		.when('/binarytree', {
			templateUrl: '/views/HarryApp/binarytree.html',
			controller: 'treecontroller',
			css: 'css/treecss.css'
		})
		.when('/sudoku', {
			templateUrl: '/views/HarryApp/sudoku.html',
			controller: 'sudokucontroller',
			css: 'css/sudokucss.css'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);
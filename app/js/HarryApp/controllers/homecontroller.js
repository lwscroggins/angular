'use strict'

module.exports = function(app) {
	app.controller('homecontroller', function($scope) {
		$scope.whereAmI = function() {
			console.log('you are at the home page');
		};
		$scope.whereAmI();
	});
};



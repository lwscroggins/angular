'use strict'

module.exports = function(app) {
	app.controller('trekcontroller', function($scope) {
		$scope.whereAmI = function() {
			console.log('you are at the star trek page');
		};
		$scope.whereAmI();
	});
};
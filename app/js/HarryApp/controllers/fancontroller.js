'use strict'

module.exports = function(app) {
	app.controller('fancontroller', function($scope) {
		$scope.whereAmI = function() {
			console.log('you are at the fandom page');
		};
		$scope.whereAmI();
	});
};
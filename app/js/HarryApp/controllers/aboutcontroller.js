module.exports = function(app) {
	app.controller('aboutcontroller', function($scope) {
		$scope.whereAmI = function() {
			console.log('you are at the about page');
		};
		$scope.whereAmI();
	});
};
module.exports = function(app) {
	app.controller('pottercontroller', function($scope) {
		$scope.whereAmI = function() {
			console.log('you are at the harry potter page');
		};
		$scope.whereAmI();
	});
};
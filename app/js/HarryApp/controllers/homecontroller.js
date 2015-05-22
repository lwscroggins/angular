module.exports = function(app) {
	app.controller('homecontroller', ['$scope', '$location',  function($scope, $location) {
		$scope.whereAmI = function() {
			console.log('you are at the home page');
		};
		$scope.whereAmI();
		$scope.go = function (path) {
			$location.path(path);
		};
	}]);
};



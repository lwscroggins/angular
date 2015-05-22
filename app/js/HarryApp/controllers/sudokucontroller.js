module.exports = function(app) {
	app.controller('sudokucontroller', function($scope) {
		$scope.inputs = {
			row: '',
			column: '',
			number: 0
		};

		$scope.setStart = function() {
			var row = "row" + $scope.inputs.row;
			var column = "col" + $scope.inputs.column;
			var number = $scope.inputs.number;
			console.log(row);
			console.log(column);
			console.log(number);
		};
	});
};
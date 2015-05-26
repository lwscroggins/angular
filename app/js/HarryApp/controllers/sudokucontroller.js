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
			sudokucell = document.getElementById(row + column);
			sudokucell.innerHTML = number;
		};

		$scope.sudSolver = function() {
			console.log('Ha! You wish.');
		};
	});
};
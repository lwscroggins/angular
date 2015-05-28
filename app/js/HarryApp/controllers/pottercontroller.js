module.exports = function(app) {
	app.controller('pottercontroller', function($scope) {
		$scope.whereAmI = function() {
			console.log('you are at the harry potter page');
		};
		$scope.whereAmI();

		// options = {
		// 	success: function(files) {
		// 		files.forEach(function(file) {
		// 			addToHthml(file);
		// 		});
		// 	},
		// 	cancel: function() {

		// 	},
		// 	linkType: "preview",
		// 	multiselect: false,
		// 	extensions: ['.html']
		// };

		// var addToHthml = function(file) {
		// 	var li = document.createElement('li');
		// 	var a = document.createElement('a');
		// 	a.href = file.link;
		// 	document.getElementById('storylist').appendChild(li).appendChild(a);
		// }

		// var button = Dropbox.createChooseButton(options);
		// document.getElementById('container').appendChild(button);
	});
};
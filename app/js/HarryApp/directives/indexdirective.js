'use strict'

module.exports = function(app) {
	app.directive('scattercards', function() {
		return {
			scope: {},
			restrict: 'E',
			link: function(scope, element, attrs) {
				element.append('<div><div class="cardoverlay"></div>');
				element.addClass('card genericcard');
				var rNum = Math.random() * 359;
				var xScatter = Math.random() * 1920;
				var yScatter = Math.random() * 800;
				var bgImage = (Math.floor(Math.random() * 21) + 1) + '.jpg';
				element.css({
					"-webkit-transform": "rotate("+rNum+"2deg)",
					"-moz-transform": "rotate("+rNum+"2deg)",
					"top": yScatter + 'px',
					"left": xScatter + 'px',
					"background": 'url(/img/' + bgImage + ') no-repeat',
					"background-size": "cover"
				});
			}
		};
	});
};
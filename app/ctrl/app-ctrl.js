(function () {
	var ctrlM = angular.module('lbc.ctrl');

	ctrlM.controller('homeDefaultCtrl', ['$scope', function($scope){
		console.log('homeDefaultCtrl');
	}]);

	ctrlM.controller('homeVaCtrl', ['$scope', function($scope){
		console.log('homeVaCtrl');
	}]);

	ctrlM.controller('homeVbCtrl', ['$scope', function($scope){
		console.log('homeVbCtrl');
	}]);

	ctrlM.controller('homeVcCtrl', ['$scope', function($scope){
		console.log('homeVcCtrl');
	}]);

	ctrlM.controller('galleryCtrl', ['$scope', 'Lightbox', function($scope, Lightbox){
		console.log('galleryCtrl');
		$scope.thumbboxList = [
			{url: "./metamorphosis/_img/magicCycle0.png", thumbUrl: "./metamorphosis/_img/magicCycle0.png", caption: "This is description 0."},
			{url: "./metamorphosis/_img/magicCycle1.png", thumbUrl: "./metamorphosis/_img/magicCycle1.png", caption: "the is description 1."},
			{url: "./metamorphosis/_img/magicCycle2.png", thumbUrl: "./metamorphosis/_img/magicCycle2.png", caption: "This is description 2."},
			{url: "./metamorphosis/_img/magicCycle3.png", thumbUrl: "./metamorphosis/_img/magicCycle3.png", caption: "the is description 3."}
		];

		$scope.openThumbModalByIndex = function (idx) {
			Lightbox.openModal($scope.thumbboxList, idx);
		};

	}]);

	ctrlM.controller('carouselCtrl', ['$scope', function($scope){
		console.log('carouselCtrl');
		$scope.crsInterval = 3000;
		$scope.noWrapSlides = false;
		$scope.crsSlides = [
			{lane: "../metamorphosis/_img/cs0.png"},
			{lane: "../metamorphosis/_img/cs1.png"},
			{lane: "../metamorphosis/_img/cs2.png"},
			{lane: "../metamorphosis/_img/cs3.jpeg"}
		];
	}]);

})();
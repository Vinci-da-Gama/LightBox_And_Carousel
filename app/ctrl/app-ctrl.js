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

	ctrlM.controller('galleryCtrl', ['$scope', function($scope){
		console.log('galleryCtrl');
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
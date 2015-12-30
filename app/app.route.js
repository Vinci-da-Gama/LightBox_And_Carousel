(function () {
	var rM = angular.module('lbc.router');

	rM.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			views: {
				"": {
					templateUrl: './_partials/views/_home/HomeGeneral-tmpl.html',
					controller: 'homeDefaultCtrl'
				},
				"homeViewA@home": {
					templateUrl: './_partials/views/_home/homeViewA-tmpl.html',
					controller: 'homeVaCtrl'
				},
				"homeViewB@home": {
					templateUrl: './_partials/views/_home/homeViewB-tmpl.html',
					controller: 'homeVbCtrl'
				},
				"homeViewC@home": {
					templateUrl: './_partials/views/_home/homeViewC-tmpl.html',
					controller: 'homeVcCtrl'
				}
			}
		})
		.state('gallery', {
			url: '/gallery',
			templateUrl: './_partials/views/_gallery/gallery-tmpl.html',
			controller: 'galleryCtrl'
		})
		.state('carousel', {
			url: '/carousel',
			templateUrl: './_partials/views/_Carousel/carousel-view.html',
			controller: 'carouselCtrl'
		});

	}]);

})();
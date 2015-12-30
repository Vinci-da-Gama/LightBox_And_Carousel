(function () {

	var anguNg = ['ngAria', 'ngSanitize', 'ngAnimate', 'ngMessages', 'ngNotify'];
	var anguEx = ['ui.bootstrap', 'mgcrea.ngStrap', 'angularMoment', 'bootstrapLightbox'];
	var routerCtrl = ['lbc.router', 'lbc.ctrl'];
	var cons = ['lbc.constant'];
	var serv = ['lbc.sig.service', 'lbc.service'];
	var dir = ['lbc.dir', 'lbc.cust.dir'];

	var depedencyArr = anguNg.concat(anguEx, routerCtrl, cons, serv, dir);
	/**
	* lbc Module
	*
	* The main module of this application...
	*/
	angular.module('lbc', depedencyArr);

	angular.module('lbc.router', ['ui.router']);
	angular.module('lbc.constant', []);
	angular.module('lbc.sig.service', []);
	angular.module('lbc.service', []);
	angular.module('lbc.ctrl', []);
	angular.module('lbc.dir', ['lbc.service', 'lbc.sig.service']);
	angular.module('lbc.cust.dir', ['lbc.service', 'lbc.sig.service']);

})();
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
(function () {
	var cdM = angular.module('lbc.cust.dir');

	// cdM

})();
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
(function () {
	var cosM = angular.module('lbc.constant');

})();
(function () {
	var dM = angular.module('lbc.dir');

	// dM

})();
// service js Document
// $log.log("sigSrevice error line -- 15 --- data : "+data+" config: "+config+" status: "+status+".---");
	/*sM.service('verifyNumStrObjArrUndefinedElem', ['$log', function($log){
		
		this.IsNumberAndGreaterThanZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure > 0;
			return numBool;
		};

		this.IsNumberAndGreaterThanWhileEqualZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure >= 0;
			return numBool;
		};

		this.IsStringAndNotNull = function (str) {
			var strBool = angular.isString(str) && str.length > 0 && str !== null && str !== '';
			return strBool;
		};

		this.IsUndefined = function (testimony) {
			var refBool = angular.isUndefined(testimony);
			return refBool;
		};

		this.IsJqOrDomElem = function (jqdomElem) {
			var argBool = angular.isElement(jqdomElem) && typeof(jqdomElem) !== 'undefined';
			return argBool;
		};

		this.IsObjAndNotEmpty = function (obj) {
			var objBool = angular.isObject(obj) && Object.keys(obj).length > 0 && typeof(obj) !== 'undefined';
			return objBool;
		};

		this.IsArrayAndNotUnfilled = function (arr) {
			var arrBool = angular.isArray(arr) && arr.length > 0 && typeof(arr) !== 'undefined';
			return arrBool;
		}

	}]);*/
(function () {
	var sM = angular.module('lbc.service');

	// sM

})();
// service js Document
// $log.log("sigSrevice error line -- 14 --- data : "+data+" config: "+config+" status: "+status+".---");
/*sigM.service('inquireInfo', ['$http', '$log', 'appnameDb', function($http, $log, appnameDb){
	var dbPath = appnameDb.dbDot+appnameDb.delimiter+appnameDb.dbPrefix+appnameDb.delimiter+appnameDb.dbName+appnameDb.dbExtension;

	this.obtainDossier = function (func) {
		$http.get(dbPath)
		.then(function (testimony) {
			func(testimony.data);
			$log.log('get data successfully. '+dbPath);
		})
		.catch(function (data, config, status) {
			$log.log("sigSrevice error line -- 16 -\&\#1046\;- data : "+data+" config: "+config+" status: "+status+".---");
		})
		.finally(function () {
			$log.log('sigSrevice line 19, finally method.');
		});
	};

}]);*/
(function () {
	var ssM = angular.module('lbc.sig.service');

	// ssM

})();
// jQuery Js Document
$(document).ready(function() {
	// notice ();
});

/*function notice () {
	alert('pls, disable this function.');
}*/
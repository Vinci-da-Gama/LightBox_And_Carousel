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
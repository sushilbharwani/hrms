/**
 * 
 */
var myApp = angular.module("hrms", ['ngRoute','CtrlModule']);
myApp.config(['$routeProvider',function($routeProvider){
	
	$routeProvider.when("/one", {templateUrl: "partials/one.html",controller: "oneCtrl"}).when("/two",{templateUrl: "partials/two.html",controller: "twoCtrl"}).otherwise({redirectTo:"/one"});
}]);
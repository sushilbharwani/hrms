var myControllerModule = angular.module('CtrlModule', []);

myControllerModule.controller("oneCtrl",['$scope','$http',function($scope,$http){
	
	$scope.employees = [
	                    {"name":"sushil","phoneNumber":"9873661910","address":"4118 ground floor IP"},
	                    {"name":"sushil","phoneNumber":"9873661910","address":"4118 ground floor IP"},
	                    {"name":"sushil","phoneNumber":"9873661910","address":"4118 ground floor IP"},
	                    {"name":"sushil","phoneNumber":"9873661910","address":"4118 ground floor IP"},
	                    {"name":"sushil","phoneNumber":"9873661910","address":"4118 ground floor IP"},
	                    {"name":"sushil","phoneNumber":"9873661910","address":"4118 ground floor IP"}
	
	];
	
	
}]);
myControllerModule.controller("twoCtrl",['$scope','$http',function($scope,$http){
	
	
	$scope.name ="amit";
	
	
}]);
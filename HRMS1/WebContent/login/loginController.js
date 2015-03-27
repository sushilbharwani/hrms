(function(){
	'Use Strict'
	
	angular.module("hrms")
	.controller("loginController",loginController);
	
	loginController.inject = ['$scope'];
	function loginController($scope){
		
		$scope.welcome = "Welcome to Login Page";
		
	}
	
	
	
})();


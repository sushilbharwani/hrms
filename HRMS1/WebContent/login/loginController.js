(function(){
	'Use Strict'
	
	angular.module("hrms")
	.controller("loginController",loginController);
	
	loginController.$inject = ['$scope','AuthenticationService','$location'];
	function loginController($scope,AuthenticationService,$location){
		
		$scope.welcome = "Welcome to Login Page";
		
		$scope.login = function(){
			
			var loginResult = AuthenticationService.login($scope.username,$scope.password);
			
			if(loginResult){
				
				$location.path('/home');
			}else{
				
				
			}
			
		};
		
	}
	
	
	
})();


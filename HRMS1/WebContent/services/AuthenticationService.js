(function(){
	
	angular.module('hrms')
	.factory("AuthenticationService",AuthenticationService);
	
	AuthenticationService.$inject = ['$rootScope'];
	
	function AuthenticationService($cookieStore,$rootScope,$http){
		
		var service = {};
		
		service.login = login;
		
		return service;
		
		function login(username,password){
			
			if(username=="sushil" && password=="bharwani"){
				return true;
				
			}else{
				
				return false;
			}
		}
		
	}
	
})();

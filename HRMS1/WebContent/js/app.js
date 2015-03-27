(function(){
	'use strict';
angular.module("hrms", ['ngRoute'])
 .config(config)
 .run(run);

config.injector = ['$routeProvider'];

function config($routeProvider){
$routeProvider
  .when("/login",
	{
	templateUrl: "login/login.html",
	controller: "loginController"
	})
 .when("/register",
	{
	templateUrl: "register/register.html",
	controller: "registerController"
	})
 .when("/home",
	{templateUrl: "home/home.html",
	controller: "HomeController"
	})
  .otherwise({redirectTo:"login/login.html"});
}

$run.inject = ['$location'];
function run($location){
	
	$location.path('/login');
	
}


})();
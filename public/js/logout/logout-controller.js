'use strict';

angular.module('sunsetApp')
  .controller('LogoutController', ['$scope', '$modal', '$location', '$cookies',
    function ($scope, $modal, $location, $cookies) {

   	 	$scope.doLogout = function(){
   	 		console.log("I hate alpho");
         	var cookies = $cookies.getAll();
			angular.forEach(cookies, function (v, k) {
			    $cookies.remove(k);
			});
			$location.path('/');
      	};
      	
      
    }]);

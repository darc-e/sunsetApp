angular.module('sunsetApp')
  .controller('HomeController', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
  		$rootScope.productsList = [];
  		$rootScope.loggedIn = 0;
  		$rootScope.goBack = function(){
  			$window.history.back();
  		};
  		$scope.go = function ( path ) {
		  $location.path( path );
		};
  }]);

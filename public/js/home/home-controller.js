angular.module('sunsetApp')
  .controller('HomeController', ['$scope', '$rootScope', '$window', '$location', '$cookies', function ($scope, $rootScope, $window, $location, $cookies) {
  		if (!$rootScope.productsList) {
        $rootScope.productsList = [];
        if ( $cookies.getObject('productsList') ){
          $rootScope.productsList = $cookies.getObject('productsList');
          $rootScope.loggedIn = 1;
         }
      }
      if (!$rootScope.loggedIn) {
  		  $rootScope.loggedIn = 0;
      }
       if (!$rootScope.member) {
         $rootScope.member = [];
         if ( $cookies.getObject('client') ){
          $rootScope.member = $cookies.getObject('client');
          $rootScope.loggedIn = 1;
         }
        //console.log($cookies.getObject('client'));
         
      }
     
    
  		$rootScope.goBack = function(){
  			$window.history.back();
  		};
  		$scope.go = function ( path ) {
		    $location.path( path );
		  };
     
  }]);

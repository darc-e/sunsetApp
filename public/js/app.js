// Declare app level module which depends on filters, and services
angular.module('sunsetApp', ['ngResource', 'ngRoute', 'ui.bootstrap', 'ui.date', 'angular.filter'])
  .config(['$routeProvider', '$locationProvider', '$rootScopeProvider', function ($routeProvider, $locationProvider, $rootScopeProvider) {

    $routeProvider
      	.when('/', {
	        templateUrl: 'views/home/home.html', 
	        controller: 'HomeController'
    	})
    	.when('/sunsetApp/productss', {
	        templateUrl: 'views/products/products.html',
	        controller: 'ProductsController'
	    })
	    
	    .when('/sunsetApp/profiles', {
	        templateUrl: 'views/profiles/profiles.html',
	        controller: 'ProfilesController'
	    })
	     .when('/sunsetApp/heights', {
	     	 templateUrl: 'views/heights/heights.html',
	        controller: 'HeightsController'
	    })
	     .when('/sunsetApp/colours', {
	     	 templateUrl: 'views/colours/colours.html',
	        controller: 'ColoursController'
	    })

	    .when('/sunsetApp/whereToBuy', {
	        templateUrl: 'views/whereToBuy/whereToBuy.html',
	        controller: 'WhereToBuyController'
	    })
	
	    .when('/sunsetApp/catalogue', {
	        templateUrl: 'views/catalogue/catalogue.html',
	        controller: 'CatalogueController'
	    })
	    .when('/sunsetApp/contact', {
	        templateUrl: 'views/contact/contact.html',
	        controller: 'ContactController'
	    })
	    .when('/sunsetApp/members', {
	        templateUrl: 'views/members/members.html',
	        controller: 'MembersController'
	    })
	    .when('/sunsetApp/login', {
	        templateUrl: 'views/login/login.html',
	        controller: 'MembersController'
	    })
	    .when('/sunsetApp/signup', {
	        templateUrl: 'views/signup/signup.html',
	        controller: 'MembersController'
	    })
      	.otherwise({redirectTo: '/'});

      	$locationProvider.html5Mode(true);
  }]);

// Declare app level module which depends on filters, and services
angular.module('sunsetApp', ['ngResource', 'ngRoute', 'ui.bootstrap', 'ui.date', 'angular.filter', 'ngCookies'])
  .config(['$routeProvider', '$locationProvider', '$rootScopeProvider', '$cookiesProvider', function ($routeProvider, $locationProvider, $rootScopeProvider, $cookies) {

    $routeProvider
      	.when('/', {
	        templateUrl: 'views/home/home.html', 
	        controller: 'HomeController'
    	})
    	.when('/products', {
	        templateUrl: 'views/products/products.html',
	        controller: 'ProductsController'
	    })
	    .when('/productsList', {
	        templateUrl: 'views/productsList/productsList.html',
	        controller: 'ProductsListController'
	    })
	    .when('/profiles', {
	        templateUrl: 'views/profiles/profiles.html',
	        controller: 'ProfilesController'
	    })
	     .when('/heights', {
	     	 templateUrl: 'views/heights/heights.html',
	        controller: 'HeightsController'
	    })
	     .when('/colours', {
	     	 templateUrl: 'views/colours/colours.html',
	        controller: 'ColoursController'
	    })

	    .when('/whereToBuy', {
	        templateUrl: 'views/whereToBuy/whereToBuy.html',
	        controller: 'WhereToBuyController'
	    })
	
	    .when('/catalogue', {
	        templateUrl: 'views/catalogue/catalogue.html',
	        controller: 'CatalogueController'
	    })
	    .when('/contact', {
	        templateUrl: 'views/contact/contact.html',
	        controller: 'ContactController'
	    })
	    .when('/members', {
	        templateUrl: 'views/members/members.html',
	        controller: 'MembersController'
	    })
	    .when('/login', {
	        templateUrl: 'views/login/login.html',
	        controller: 'MembersController'
	    })
	    .when('/logout', {
	        templateUrl: 'views/logout/logout.html',
	        controller: 'LogoutController'
	    })
	    .when('/signup', {
	        templateUrl: 'views/signup/signup.html',
	        controller: 'MembersController'
	    })
      	.otherwise({redirectTo: '/'});

      	//$locationProvider.html5Mode(true);
  }]);

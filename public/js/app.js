// Declare app level module which depends on filters, and services
angular.module('sunsetApp', ['ngResource', 'ngRoute', 'ui.bootstrap', 'ui.date', 'angular.filter'])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      	.when('/', {
	        templateUrl: 'views/home/home.html', 
	        controller: 'HomeController'
    	})
    	.when('/products', {
	        templateUrl: 'views/products/products.html',
	        controller: 'ProductsController'
	    })
	    .when('/sunsetApp/profiles', {
	        templateUrl: 'views/profiles/profiles.html',
	        controller: 'ProfilesController'
	    })
	    .when("/sunsetApp/whereToBuy",{
	      	templateUrl:"views/wheretobuy/wheretobuy.html",
	      	controller:"WheretobuyController"
	    })
	    .when("/sunsetApp/catalogue",{
	      	templateUrl:"views/catalogue/catalogue.html",
	      	controller:"CatalogueController"
	    })
	    .when("/sunsetApp/contact",{
	      	templateUrl:"views/contact/contact.html",
	      	controller:"ContactController"
	    })
      	.otherwise({redirectTo: '/'});

      	$locationProvider.html5Mode(true);
  }]);

// Declare app level module which depends on filters, and services
angular.module('sunsetApp', ['ngResource', 'ngRoute', 'ui.bootstrap', 'ui.date'])
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
	    .when('/products/:prodId/items/:itemId', {
	        templateUrl: 'views/product/product.html',
	        controller: 'ProductController'
	    })
	    .when("/whereToBuy",{
	      	templateUrl:"views/wheretobuy/wheretobuy.html",
	      	controller:"WheretobuyController"
	    })
	    .when("/catalogue",{
	      	templateUrl:"views/catalogue/catalogue.html",
	      	controller:"CatalogueController"
	    })
	    .when("/contact",{
	      	templateUrl:"views/contact/contact.html",
	      	controller:"ContactController"
	    })
      	.otherwise({redirectTo: '/'});

      	$locationProvider.html5Mode(true);
  }]);

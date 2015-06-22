'use strict';

angular.module('sunsetApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/products/productsList', {
        templateUrl: 'views/products/productsList.html',
        controller: 'ProductsController'
      })
    }]);

'use strict';

angular.module('sunsetApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/products', {
        templateUrl: 'views/products/products.html',
        controller: 'ProductsController',
        resolve:{
          resolvedProducts: ['Products', function (Products) {
            return Products.query();
          }],
          resolvedProfiles: ['Profiles', function (Profiles) {
            return Profiles.query();
          }]
        }
      })
      .when('/products/:id', {
        templateUrl: 'views/products/product.html',
        controller: 'ProductsController',
        resolve:{
          resolvedProducts: ['Products', function (Products) {
            return Products.query();
          }],
          resolvedProfiles: ['Profiles', function (Profiles) {
            return Profiles.query();
          }]
        }
      })
    }]);

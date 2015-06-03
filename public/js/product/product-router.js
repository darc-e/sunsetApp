'use strict';

angular.module('sunsetApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/products/:id', {
        templateUrl: 'views/products/product.html',
        controller: 'ProductsController',
        resolve:{
          resolvedProducts: ['Products', function (Products) {
            return Products.query();
          }],
          resolvedProfiles: ['Profiles', function (Profiles) {
            return Profiles.query();
          }],
          resolvedHeights: ['Heights', function (Heights) {
            return Heights.query();
          }]
        }
      })
    }]);

'use strict';

angular.module('sunsetApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/products/:id', {
        templateUrl: 'views/product/product.html',
        controller: 'ProductController',
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

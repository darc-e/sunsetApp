'use strict';

angular.module('sunsetApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/productsList', {
        templateUrl: 'views/productsList/productsList.html',
        controller: 'ProductsListController'
      })
    }]);

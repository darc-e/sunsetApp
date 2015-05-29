'use strict';

angular.module('sunsetApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/whereToBuy', {
        templateUrl: 'views/wheretobuy/wheretobuy.html',
        controller: 'WhereToBuyController',
        resolve:{
          resolvedWhereToBuy: ['WhereToBuy', function (WhereToBuy) {
            return WhereToBuy.query();
          }]
        }
      })
    }]);

'use strict';

angular.module('sunsetApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/heights', {
        templateUrl: 'views/heights/heights.html',
        controller: 'HeightsController',
        resolve:{
          resolvedHeights: ['Heights', function (Heights) {
            return Heights.query();
          }]
        }
      })
    }]);

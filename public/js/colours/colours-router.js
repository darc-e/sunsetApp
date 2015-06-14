'use strict';

angular.module('sunsetApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/colours', {
        templateUrl: 'views/colours/colours.html',
        controller: 'ColoursController',
        resolve:{
          resolvedColours: ['Colours', function (Colours) {
            return Colours.query();
          }]
        }
      })
    }]);

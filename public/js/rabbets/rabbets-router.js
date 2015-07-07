'use strict';

angular.module('sunsetApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/rabbets', {
        templateUrl: 'views/rabbets/rabbets.html',
        controller: 'RabbetsController',
        resolve:{
          resolvedHRabbets: ['Rabbets', function (Rabbets) {
            return Rabbets.query();
          }]
        }
      })
    }]);

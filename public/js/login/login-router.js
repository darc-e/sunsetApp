'use strict';


angular.module('sunsetApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login/login.html',
        controller: 'LoginController',
        resolve:{
          resolvedMembers: ['Members', function (Members) {
            return Members.query();
          }]
        }
      })
    }]);

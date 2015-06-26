'use strict';

angular.module('sunsetApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login/login.html',
        controller: 'LoginController',
        resolve:{
          resolvedLogin: ['Login', function (Login) {
            return Login.query();
          }]
        }
      })
    }]);

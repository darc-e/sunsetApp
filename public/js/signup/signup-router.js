'use strict';

angular.module('sunsetApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/signup', {
        templateUrl: 'views/signup/signup.html',
        controller: 'MembersController',
        resolve:{
          resolvedMembers: ['Members', function (Members) {
            return Members.query();
          }]
        }
      })
    }]);

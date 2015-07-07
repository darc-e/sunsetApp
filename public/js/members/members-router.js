'use strict';

angular.module('sunsetApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/members', {
        templateUrl: 'views/members/members.html',
        controller: 'MembersController',
        resolve:{
          resolvedMembers: ['Members', function (Members) {
            return Members.query();
          }]
        }
      })
    }]);

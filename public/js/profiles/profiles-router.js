'use strict';

angular.module('sunsetApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/profiles', {
        templateUrl: 'views/profiles/profiles.html',
        controller: 'ProfilesController',
        resolve:{
          resolvedProfiles: ['Profiles', function (Profiles) {
            return Profiles.query();
          }]
        }
      })
    }]);

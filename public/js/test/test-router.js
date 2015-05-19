'use strict';

angular.module('sunsetApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/tests', {
        templateUrl: 'views/test/tests.html',
        controller: 'TestController',
        resolve:{
          resolvedTest: ['Test', function (Test) {
            return Test.query();
          }]
        }
      })
    }]);

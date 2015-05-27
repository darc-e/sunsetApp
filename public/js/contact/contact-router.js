'use strict';

angular.module('sunsetApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/contact', {
        templateUrl: 'views/contact/contact.html',
        controller: 'ContactController'
      })
    }]);

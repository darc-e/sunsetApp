'use strict';

angular.module('sunsetApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/catalogue', {
        templateUrl: 'views/catalogue/catalogue.html',
        controller: 'CatalogueController'
      })
    }]);

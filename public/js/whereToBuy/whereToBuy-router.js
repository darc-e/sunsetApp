'use strict';

angular.module('sunsetApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/whereToBuy', {
        templateUrl: 'views/whereToBuy/whereToBuy.html',
        controller: 'WhereToBuyController'
      })
    }]);

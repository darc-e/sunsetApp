'use strict';

angular.module('sunsetApp')
  .factory('WhereToBuy', ['$resource', function ($resource) {
    return $resource('sunsetApp/WhereToBuy/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);

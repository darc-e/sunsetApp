'use strict';

angular.module('sunsetApp')
  .factory('Test', ['$resource', function ($resource) {
    return $resource('sunsetApp/tests/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);

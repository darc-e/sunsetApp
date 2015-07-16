'use strict';

angular.module('sunsetApp')
  .factory('Members', ['$resource', function ($resource) {
    return $resource('members/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);

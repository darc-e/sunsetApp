'use strict';

angular.module('sunsetApp')
  .factory('Members', ['$resource', function ($resource) {
    return $resource('sunsetApp/members/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);

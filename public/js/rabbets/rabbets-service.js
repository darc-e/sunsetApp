'use strict';

angular.module('sunsetApp')
  .factory('Rabbets', ['$resource', function ($resource) {
    return $resource('rabbets/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);

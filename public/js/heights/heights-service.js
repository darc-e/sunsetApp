'use strict';

angular.module('sunsetApp')
  .factory('Heights', ['$resource', function ($resource) {
    return $resource('heights/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);

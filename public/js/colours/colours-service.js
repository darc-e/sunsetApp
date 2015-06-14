'use strict';

angular.module('sunsetApp')
  .factory('Colours', ['$resource', function ($resource) {
    return $resource('sunsetApp/colours/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);

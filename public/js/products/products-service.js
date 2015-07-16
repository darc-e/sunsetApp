'use strict';

angular.module('sunsetApp')
  .factory('Products', ['$resource', function ($resource) {
    return $resource('products/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);

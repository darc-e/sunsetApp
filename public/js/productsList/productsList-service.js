'use strict';

angular.module('sunsetApp')
  .factory('ProductList', ['$resource', function ($resource) {
    return $resource('productsList/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);

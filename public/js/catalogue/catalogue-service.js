'use strict';

angular.module('sunsetApp')
  .factory('Catalogue', ['$resource', function ($resource) {
    return $resource('sunsetApp/catalogue/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);

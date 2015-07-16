'use strict';

angular.module('sunsetApp')
  .factory('Login', ['$resource', function ($resource) {
    return $resource('login/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);

'use strict';

angular.module('sunsetApp')
  .factory('Signup', ['$resource', function ($resource) {
    return $resource('sunsetApp/Signup/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);

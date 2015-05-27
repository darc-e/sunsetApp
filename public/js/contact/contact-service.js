'use strict';

angular.module('sunsetApp')
  .factory('Contact', ['$resource', function ($resource) {
    return $resource('sunsetApp/contact/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);

'use strict';

angular.module('sunsetApp')
  .factory('Profiles', ['$resource', function ($resource) {
    return $resource('sunsetApp/profiles/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);

'use strict';

angular.module('sunsetApp')
  .controller('RabbetsController', ['$scope', '$modal', 'resolvedRabbets', 'Rabbets',
    function ($scope, $modal, resolvedRabbets, Rabbets) {

      $scope.rabbets = resolvedRabbets;

}]);

      


      

      
      
  

'use strict';

angular.module('sunsetApp')
  .controller('ColoursController', ['$scope', '$modal', 'resolvedColours', 'Colours',
    function ($scope, $modal, resolvedColours, Colours) {

      $scope.colours = resolvedColours;

}]);

      


      

      
      
  

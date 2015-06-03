'use strict';

angular.module('sunsetApp')
  .controller('HeightsController', ['$scope', '$modal', 'resolvedHeights', 'Heights',
    function ($scope, $modal, resolvedHeights, Heights) {

      $scope.heights = resolvedHeights;

}]);

      


      

      
      
  

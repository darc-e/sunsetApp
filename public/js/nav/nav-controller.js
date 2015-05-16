'use strict';

/**
 * @ngdoc function
 * @name sunsetApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the sunsetApp
 */
  angular.module('sunsetApp')
  .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function(viewLocation) {

      return viewLocation === $location.path() ;
    };

    $scope.classActive = function( viewLocation ) {

      if( $scope.isActive(viewLocation) ) {
        return 'active';
      }
      
    };
   
  }]);

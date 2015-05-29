'use strict';

angular.module('sunsetApp')
  .controller('WhereToBuyController', ['$scope', '$modal', 'resolvedWhereToBuy', 'WhereToBuy',
    function ($scope, $modal, resolvedWhereToBuy, WhereToBuy) {

      $scope.wheretobuys = resolvedWhereToBuy;

      $scope.create = function () {
        $scope.clear();
        $scope.open();
      };

      $scope.update = function (id) {
        $scope.whereToBuy = WhereToBuy.get({id: id});
        $scope.open(id);
      };

      $scope.delete = function (id) {
        WhereToBuy.delete({id: id},
          function () {
            $scope.wheretobuys = WhereToBuy.query();
          });
      };

      $scope.save = function (id) {
        if (id) {
          WhereToBuy.update({id: id}, $scope.whereToBuy,
            function () {
              $scope.wheretobuys = WhereToBuy.query();
              $scope.clear();
            });
        } else {
          WhereToBuy.save($scope.whereToBuy,
            function () {
              $scope.wheretobuys = WhereToBuy.query();
              $scope.clear();
            });
        }
      };

      $scope.clear = function () {
        $scope.whereToBuy = {
          
          "myattr": "",
          
          "id": ""
        };
      };

      $scope.open = function (id) {
        var whereToBuySave = $modal.open({
          templateUrl: 'whereToBuy-save.html',
          controller: 'WhereToBuySaveController',
          resolve: {
            whereToBuy: function () {
              return $scope.whereToBuy;
            }
          }
        });

        whereToBuySave.result.then(function (entity) {
          $scope.whereToBuy = entity;
          $scope.save(id);
        });
      };
    }])
  .controller('WhereToBuySaveController', ['$scope', '$modalInstance', 'whereToBuy',
    function ($scope, $modalInstance, whereToBuy) {
      $scope.whereToBuy = whereToBuy;

      

      $scope.ok = function () {
        $modalInstance.close($scope.whereToBuy);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }]);

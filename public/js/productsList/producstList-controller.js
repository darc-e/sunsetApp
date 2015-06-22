'use strict';

angular.module('sunsetApp')
  .controller('ProductListController', ['$scope', '$modal', 'resolvedProductList', 'ProductList',
    function ($scope, $modal, resolvedProductList, ProductList) {

      $scope.productlists = resolvedProductList;

      $scope.create = function () {
        $scope.clear();
        $scope.open();
      };

      $scope.update = function (id) {
        $scope.productList = ProductList.get({id: id});
        $scope.open(id);
      };

      $scope.delete = function (id) {
        ProductList.delete({id: id},
          function () {
            $scope.productlists = ProductList.query();
          });
      };

      $scope.save = function (id) {
        if (id) {
          ProductList.update({id: id}, $scope.productList,
            function () {
              $scope.productlists = ProductList.query();
              $scope.clear();
            });
        } else {
          ProductList.save($scope.productList,
            function () {
              $scope.productlists = ProductList.query();
              $scope.clear();
            });
        }
      };

      $scope.clear = function () {
        $scope.productList = {
          
          "myattr": "",
          
          "id": ""
        };
      };

      $scope.open = function (id) {
        var productListSave = $modal.open({
          templateUrl: 'productList-save.html',
          controller: 'ProductListSaveController',
          resolve: {
            productList: function () {
              return $scope.productList;
            }
          }
        });

        productListSave.result.then(function (entity) {
          $scope.productList = entity;
          $scope.save(id);
        });
      };
    }])
  .controller('ProductListSaveController', ['$scope', '$modalInstance', 'productList',
    function ($scope, $modalInstance, productList) {
      $scope.productList = productList;

      

      $scope.ok = function () {
        $modalInstance.close($scope.productList);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }]);

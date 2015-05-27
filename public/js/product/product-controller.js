'use strict';

angular.module('sunsetApp')
  .controller('ProductController', ['$scope', '$modal', 'resolvedProducts', 'Products', '$routeParams',
    function ($scope, $modal, resolvedProducts, Products, $routeParams) {

      //$scope.product = resolvedProduct;
      
      console.log('Parameter' + $routeParams.id + Products);

     
      $scope.create = function () {
        $scope.clear();
        $scope.open();
      };

      $scope.update = function (id) {
        $scope.products = Products.get({id: id});
        $scope.open(id);
      };

      $scope.delete = function (id) {
        Products.delete({id: id},
          function () {
            $scope.products = Products.query();
          });
      };

      $scope.save = function (id) {
        if (id) {
          Products.update({id: id}, $scope.products,
            function () {
              $scope.products = Products.query();
              $scope.clear();
            });
        } else {
          Products.save($scope.products,
            function () {
              $scope.products = Products.query();
              $scope.clear();
            });
        }
      };

      $scope.clear = function () {
        $scope.products = {
          
          "myattr": "",
          
          "id": ""
        };
      };

      $scope.open = function (id) {
        var productsSave = $modal.open({
          templateUrl: 'products-save.html',
          controller: 'ProductsSaveController',
          resolve: {
            products: function () {
              return $scope.products;
            }
          }
        });

        productsSave.result.then(function (entity) {
          $scope.products = entity;
          $scope.save(id);
        });
      };
    }])
  .controller('ProductsSaveController', ['$scope', '$modalInstance', 'products',
    function ($scope, $modalInstance, products) {
      $scope.products = products;

      

      $scope.ok = function () {
        $modalInstance.close($scope.products);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }]);

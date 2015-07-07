'use strict';

angular.module('sunsetApp')
  .controller('ProductsController', ['$rootScope', '$scope', '$modal', '$location', 'resolvedProducts', 'Products', 'resolvedProfiles', 'Profiles','resolvedHeights', 'Heights', '$routeParams', 
    function ($rootScope, $scope, $modal, $location, resolvedProducts, Products, resolvedProfiles, Profiles, resolvedHeights, Heights, $routeParams) {

      $scope.products = resolvedProducts;
      //$scope.products =  _.groupBy($scope.products, 'prof_id');
      $scope.profiles = resolvedProfiles;
      $scope.heights = resolvedHeights;
      $scope.prod_id = $routeParams.id;
     
     

     
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

      $scope.searchProducts = function(text){
         console.log('somesome');
      };

      $scope.yellOut = function(prod){
         $scope.productsList.push(prod); 
         $rootScope.productsList = angular.copy($scope.productsList);
         $location.path('productsList');
         console.log ($scope.productsList);
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
    }])
  ;

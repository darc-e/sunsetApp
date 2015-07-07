'use strict';

angular.module('sunsetApp')
  .controller('ProductsListController', ['$scope', '$rootScope', '$modal', '$location',
    function ($scope, $rootScope, $modal, $location) {

      if ($rootScope.loggedIn == 0 ){
        $location.path('/login');
      }
     
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
      $scope.goBackToProducts = function(){
       
         $location.path('products');
        
      };

    }]);

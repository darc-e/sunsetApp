'use strict';

angular.module('sunsetApp')
  .controller('ProductsListController', ['$scope', '$rootScope', '$modal', '$location', '$cookies',
    function ($scope, $rootScope, $modal, $location, $cookies) {

      if ($rootScope.loggedIn == 0 ){
        $location.path('/login');
      }
       if ( $cookies.getObject('productsList') ){
          $scope.productsList = $cookies.getObject('productsList');
          
        }
      //console.log("prodlidts: " + $rootScope.productsList );
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

'use strict';

angular.module('sunsetApp')
  .controller('LoginController', ['$scope', '$modal', 'resolvedLogin', 'Login',
    function ($scope, $modal, resolvedLogin, Login) {

      $scope.logins = resolvedLogin;

      $scope.create = function () {
        $scope.clear();
        $scope.open();
      };

      $scope.update = function (id) {
        $scope.login = Login.get({id: id});
        $scope.open(id);
      };

      $scope.delete = function (id) {
        Login.delete({id: id},
          function () {
            $scope.logins = Login.query();
          });
      };

      $scope.save = function (id) {
        if (id) {
          Login.update({id: id}, $scope.login,
            function () {
              $scope.logins = Login.query();
              $scope.clear();
            });
        } else {
          Login.save($scope.login,
            function () {
              $scope.logins = Login.query();
              $scope.clear();
            });
        }
      };

      $scope.clear = function () {
        $scope.login = {
          
          "myattr": "",
          
          "id": ""
        };
      };

      $scope.open = function (id) {
        var loginSave = $modal.open({
          templateUrl: 'login-save.html',
          controller: 'LoginSaveController',
          resolve: {
            login: function () {
              return $scope.login;
            }
          }
        });

        loginSave.result.then(function (entity) {
          $scope.login = entity;
          $scope.save(id);
        });
      };
    }])
  .controller('LoginSaveController', ['$scope', '$modalInstance', 'login',
    function ($scope, $modalInstance, login) {
      $scope.login = login;

      

      $scope.ok = function () {
        $modalInstance.close($scope.login);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }]);

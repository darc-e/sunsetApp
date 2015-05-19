'use strict';

angular.module('sunsetApp')
  .controller('ProfilesController', ['$scope', '$modal', 'resolvedProfiles', 'Profiles',
    function ($scope, $modal, resolvedProfiles, Profiles) {

      $scope.profiles = resolvedProfiles;

      $scope.create = function () {
        $scope.clear();
        $scope.open();
      };

      $scope.update = function (id) {
        $scope.profiles = Profiles.get({id: id});
        $scope.open(id);
      };

      $scope.delete = function (id) {
        Profiles.delete({id: id},
          function () {
            $scope.profiles = Profiles.query();
          });
      };

      $scope.save = function (id) {
        if (id) {
          Profiles.update({id: id}, $scope.profiles,
            function () {
              $scope.profiles = Profiles.query();
              $scope.clear();
            });
        } else {
          Profiles.save($scope.profiles,
            function () {
              $scope.profiles = Profiles.query();
              $scope.clear();
            });
        }
      };

      $scope.clear = function () {
        $scope.profiles = {
          
          "myattr": "",
          
          "id": ""
        };
      };

      $scope.open = function (id) {
        var profilesSave = $modal.open({
          templateUrl: 'profiles-save.html',
          controller: 'ProfilesSaveController',
          resolve: {
            profiles: function () {
              return $scope.profiles;
            }
          }
        });

        profilesSave.result.then(function (entity) {
          $scope.profiles = entity;
          $scope.save(id);
        });
      };
    }])
  .controller('ProfilesSaveController', ['$scope', '$modalInstance', 'profiles',
    function ($scope, $modalInstance, profiles) {
      $scope.profiles = profiles;

      

      $scope.ok = function () {
        $modalInstance.close($scope.profiles);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }]);

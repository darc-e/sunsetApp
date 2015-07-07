'use strict';

angular.module('sunsetApp')
  .controller('MembersController', ['$scope', '$modal', 'resolvedMembers', 'Members',
    function ($scope, $modal, resolvedMembers, Members) {

      $scope.members = resolvedMembers;

      $scope.create = function () {
        $scope.clear();
        $scope.open();
      };

      $scope.update = function (id) {
        $scope.members = Members.get({id: id});
        $scope.open(id);
      };

      $scope.delete = function (id) {
        Members.delete({id: id},
          function () {
            $scope.members = Members.query();
          });
      };

      $scope.save = function (id) {
        if (id) {
          Members.update({id: id}, $scope.members,
            function () {
              $scope.members = Members.query();
              $scope.clear();
            });
        } else {
          Members.save($scope.members,
            function () {
              $scope.members = Members.query();
              $scope.clear();
            });
        }
      };

      $scope.clear = function () {
        $scope.members = {
          
          "name": "",
          
          "id": ""
        };
      };

      $scope.open = function (id) {
        var membersSave = $modal.open({
          templateUrl: 'members-save.html',
          controller: 'MembersSaveController',
          resolve: {
            members: function () {
              return $scope.members;
            }
          }
        });

        membersSave.result.then(function (entity) {
          $scope.members = entity;
          $scope.save(id);
        });
      };
    }])
  .controller('MembersSaveController', ['$scope', '$modalInstance', 'members',
    function ($scope, $modalInstance, members) {
      $scope.members = members;

      

      $scope.ok = function () {
        $modalInstance.close($scope.members);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }]);

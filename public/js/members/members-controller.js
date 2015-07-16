'use strict';

angular.module('sunsetApp')
  .controller('MembersController', ['$rootScope', '$scope', '$modal', 'resolvedMembers', 'Members', '$location', '$cookies',
    function ( $rootScope, $scope, $modal, resolvedMembers, Members, $location, $cookies) {

      $scope.members = resolvedMembers;
      $scope.error = "";
      $scope.doLogin = function(login){
        $scope.error = "";
        if (login.p1 != login.p2) {
          $scope.error = "Passwords do not match";
        } else{

          angular.forEach( $scope.members, function(item) {
            //console.log ("email:" + item.email + ", Password:" + item.password)
            if (login.email == item.email && login.p1 == item.password){
              $rootScope.loggedIn = 1;
              $rootScope.member = item;
                $cookies.putObject('client', item);
              //$kookies.set('client_lname', item.last_name);
              //$kookies.set('client_id', item.id);
              $location.path('/products');
            } else{
              $scope.error = "Login Information is Incorrect";
            }

          });
        }
        
       console.log($rootScope.loggedIn)
        
      };
      

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

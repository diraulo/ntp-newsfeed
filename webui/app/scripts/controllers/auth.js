'use strict';

app.controller('AuthCtrl',
  function ($scope, $location, Auth) {
    if (Auth.signedIn()) {
      $location.path('/news');
    }

    $scope.$on('$firebaseSimpleLogin:login', function () {
      $location.path('/');
    });

    $scope.login = function () {
      console.log ("LOGIN","BTN");
      Auth.login($scope.user).then(function () {
        $location.path('/news');
      }, function (error) {
        $scope.error = error.toString().replace('Error: FirebaseSimpleLogin: FirebaseSimpleLogin: ', '');
      });
    };

    $scope.register = function () {
      console.log(">>>> ");
      console.log($scope.user);
      if ($scope.user == undefined) {
        $scope.error = "Please fill in all details";
        console.log("Please fill in all details");
      } else {
        Auth.register($scope.user).then(function (authUser) {
          $location.path('/');
        }, function (error) {
          $scope.error = error.toString().replace('Error: FirebaseSimpleLogin: FirebaseSimpleLogin: ', '');
        });
      }
    };
  });

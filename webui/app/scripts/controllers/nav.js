'use strict';

app.controller('NavbarController', function ($scope, $location, Auth) {
    $scope.post = {url: 'http://', title: ''};

    $scope.logout = function () {
      console.log ("LOGOUT BTN","BTN");
      Auth.logout();
    };

  });

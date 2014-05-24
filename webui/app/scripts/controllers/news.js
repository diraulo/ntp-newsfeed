'use strict';

app.controller('NewsController', function($scope, $location, News, Auth) {

  if (Auth.signedIn()) {
    console.log('News Controller');
    $scope.news = News.all;
    $scope.news_post = {url: 'http://', 'title': ''};
  } else {
    $location.path('/login');
  }
});

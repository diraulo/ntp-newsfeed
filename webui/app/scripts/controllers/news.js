'use strict';

app.controller('NewsController', function($scope, News) {
    $scope.news = News.all;

    $scope.news_post = {url: 'http://', 'title': ''};
    console.log('Result of GET news on firebase ');
    console.log($scope.news);
});

'use strict';

app.controller('NewsController', function($scope, News) {
    $scope.news = News.get();
    console.log('Result of GET news on firebase ');
    console.log($scope.news);
});

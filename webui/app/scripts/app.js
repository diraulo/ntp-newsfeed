'use strict';

var app = angular.module('ntpNewsfeedApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/news', {
            templateUrl: 'views/news.html',
            controller: 'NewsController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

'use strict';

var app = angular.module('ntpNewsfeedApp', [
   'ngCookies',
   'ngResource',
   'ngSanitize',
   'ngRoute',
   'firebase'
])
.constant('FIREBASE_URL', 'https://torid-fire-4837.firebaseio.com/');

app.config(function($routeProvider) {
    $routeProvider
       .when('/login', {
         templateUrl: 'views/login.html',
         controller: 'AuthCtrl'
       })
       .when('/register', {
         templateUrl: 'views/register.html',
         controller: 'AuthCtrl'
       })
        .when('/main', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/news', {
            templateUrl: 'views/news.html',
            controller: 'NewsController'
        })
        // .otherwise({
        //     redirectTo: '/'
        // });
});

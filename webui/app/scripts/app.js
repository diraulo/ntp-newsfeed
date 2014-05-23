'use strict';

var app = angular.module('ntpNewsfeedApp', [
   'ngCookies',
   'ngResource',
   'ngSanitize',
   'ngRoute',
   'firebase',
   'angular-loading-bar',
   'ngAnimate'
])
.constant('FIREBASE_URL', 'https://torid-fire-4837.firebaseio.com/');

app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
   cfpLoadingBarProvider.includeSpinner = true;
   cfpLoadingBarProvider.includeBar = true;
}])

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
       .when('/login', {
         templateUrl: 'views/login.html',
         controller: 'AuthCtrl'
       })
       .when('/register', {
         templateUrl: 'views/register.html',
         controller: 'AuthCtrl'
       })
        .when('/news', {
            templateUrl: 'views/news.html',
            controller: 'NewsController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

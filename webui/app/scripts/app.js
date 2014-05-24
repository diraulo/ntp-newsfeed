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

app.filter('getProfilePic', function () {
  return function (str) {
    var obj = JSON.parse(str);
    return obj.profile_image_url;
  };
});

app.filter('username', function () {
  return function (str) {
    var obj = JSON.parse(str);
    return obj.name;
  };
});

app.filter('timeFromNow', function () {
  return function (str) {
    return moment(Date.parse(str)).fromNow();
  };
});

app.filter('orderObjectBy', function(){
  return function(input, attribute) {
    if (!angular.isObject(input)) return input;

    var array = [];
    for(var objectKey in input) {
      array.push(input[objectKey]);
    }

    function compare(a,b) {
      if (a[attribute] < b[attribute])
        return -1;
      if (a[attribute] > b[attribute])
        return 1;
      return 0;
    }

    array.sort(compare);
    return array;
  }
});

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
        // .otherwise({
        //     redirectTo: '/'
        // });
});

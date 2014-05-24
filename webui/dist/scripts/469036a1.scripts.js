"use strict";var app=angular.module("ntpNewsfeedApp",["ngCookies","ngResource","ngSanitize","ngRoute","firebase","angular-loading-bar","ngAnimate"]).constant("FIREBASE_URL","https://torid-fire-4837.firebaseio.com/");app.config(["cfpLoadingBarProvider",function(a){a.includeSpinner=!0,a.includeBar=!0}]),app.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/login",{templateUrl:"views/login.html",controller:"AuthCtrl"}).when("/register",{templateUrl:"views/register.html",controller:"AuthCtrl"}).when("/news",{templateUrl:"views/news.html",controller:"NewsController"})}]),app.controller("AuthCtrl",["$scope","$location","Auth",function(a,b,c){c.signedIn()&&b.path("/news"),a.$on("$firebaseSimpleLogin:login",function(){b.path("/")}),a.login=function(){console.log("LOGIN","BTN"),c.login(a.user).then(function(){b.path("/news")},function(b){a.error=b.toString().replace("Error: FirebaseSimpleLogin: FirebaseSimpleLogin: ","")})},a.register=function(){console.log(">>>> "),console.log(a.user),void 0==a.user?(a.error="Please fill in all details",console.log("Please fill in all details")):c.register(a.user).then(function(){b.path("/")},function(b){a.error=b.toString().replace("Error: FirebaseSimpleLogin: FirebaseSimpleLogin: ","")})}}]),app.controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),app.controller("NavbarController",["$scope","$location","Auth",function(a,b,c){a.post={url:"http://",title:""},a.logout=function(){console.log("LOGOUT BTN","BTN"),c.logout()}}]),app.controller("NewsController",["$scope","$location","News","Auth",function(a,b,c,d){d.signedIn()?(console.log("News Controller"),a.news=c.all,a.news_post={url:"http://",title:""}):b.path("/login")}]),app.factory("News",["$firebase","FIREBASE_URL",function(a,b){var c=new Firebase(b+"tweets/todos"),d=a(c),e={all:d,create:function(a){return news_posts.$add(a)},find:function(){return news_posts.$child(nwsId)},"delete":function(){return news_posts.$remove(nwsId)}};return e}]),app.factory("Auth",["$firebaseSimpleLogin","FIREBASE_URL","$rootScope",function(a,b,c){var d=new Firebase(b),e=a(d),f={register:function(a){return e.$createUser(a.email,a.password)},signedIn:function(){return null!==e.user},login:function(a){return e.$login("password",a)},logout:function(){return e.$logout()}};return c.signedIn=function(){return f.signedIn()},console.log("AUTH",f),f}]),app.filter("getProfilePic",function(){return function(a){return a?JSON.parse(a).profile_image_url:"http://placehold.it/70x70"}}),app.filter("username",function(){return function(a){var b=JSON.parse(a);return b.name}}),app.filter("timeFromNow",function(){return function(a){return moment(Date.parse(a)).fromNow()}}),app.filter("orderObjectBy",function(){return function(a,b){function c(a,c){return a[b]<c[b]?-1:a[b]>c[b]?1:0}if(!angular.isObject(a))return a;var d=[];for(var e in a)d.push(a[e]);return d.sort(c),d}}),app.filter("reverse",function(){function a(a){var b,c=[];if(a)if(angular.isArray(a))c=a;else if("object"==typeof a)for(b in a)a.hasOwnProperty(b)&&c.push(a[b]);return c}return function(b){return a(b).slice().reverse()}});
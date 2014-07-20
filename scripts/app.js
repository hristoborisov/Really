'use strict';

angular.module('Really',[
      'ngRoute',
      'Really.controllers',
      'Really.services'
]).

config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/register', { templateUrl: 'views/register.html', controller: 'AuthController' });
      $routeProvider.when('/login', { templateUrl: 'views/login.html', controller: 'AuthController'});
      $routeProvider.when('/chat', {templateUrl: 'views/chat.html',controller: 'ChatController'});
      $routeProvider.otherwise({  redirectTo: '/register'});
}]);
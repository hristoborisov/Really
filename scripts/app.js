'use strict';

angular.module('Really',[
      'Really.controllers',
      'Really.services',
      'ionic',
      'firebase'
])

.config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
      .state('register', { url:'/register', templateUrl: 'views/register.html', controller: 'AuthController' })
      .state('login', { url:'/login', templateUrl: 'views/login.html', controller: 'AuthController'})
      .state('chat', { url:'/chat',templateUrl: 'views/chat.html',controller: 'ChatController'});
      
      $urlRouterProvider.otherwise('/login');
})
.run(function($rootScope, $firebaseSimpleLogin, $state, $window) {

  var dataRef = new Firebase("https://ionic-firebase-login.firebaseio.com/");
  var loginObj = $firebaseSimpleLogin(dataRef);

  loginObj.$getCurrentUser().then(function(user) {
    if(!user){ 
      // Might already be handled by logout event below
      $state.go('login');
    }
  }, function(err) {
  });

  $rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {
    $state.go('chat');
  });

  $rootScope.$on('$firebaseSimpleLogin:logout', function(e, user) {
    console.log($state);
    $state.go('login');
  });
});





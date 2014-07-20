angular.module("Really.controllers",[]).
	controller("ChatController", ["$scope", "ChatService",
    function($scope, service) {
      $scope.user = "Guest " + Math.round(Math.random()*101);
      $scope.messages = service.getMessages();
      $scope.addMessage = function() {
        service.addMessage({from: $scope.user, content: $scope.message});
        $scope.message = "";
      };
    }
  ]).
  controller("AuthController",["$scope", "AuthService", "$route", "$routeParams","$location",function ($scope, service, $route, $routeParams, $location)
	{
		console.log($route);
		$scope.$on('$routeChangeSuccess', function(error) { console.log(error);})

		$scope.email = null;
		$scope.password = null;
		$scope.createUser = function(){
			service.createUser($scope.email, $scope.password);
		}
	}
]);




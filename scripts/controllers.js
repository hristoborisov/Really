angular.module("Really.controllers",[])
.controller("ChatController", ["$scope", "ChatService", function($scope, service) {
      $scope.user = "Guest " + Math.round(Math.random()*101);
      $scope.messages = service.getMessages();
      $scope.addMessage = function() {
        service.addMessage({from: $scope.user, content: $scope.message});
        $scope.message = "";
      };
    }
  ])
.controller("AuthController",["$scope", "AuthService",function ($scope, service)
	{
		$scope.loginData = { };

		$scope.createUser = function(){
		  	service.createUser($scope.loginData.email, $scope.loginData.password);
		}
    $scope.loginUser = function(){
        service.loginUser($scope.loginData.email, $scope.loginData.password);
    }
	}
]);
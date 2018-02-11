var app = angular.module('app', []);

app.controller('postController', function($scope, $http, $location) {
	$scope.submitForm = function(){
		var url = $location.absUrl() + "/postrobot";
		
		var config = {
                headers : {
                    'Content-Type': 'application/json;charset=utf-8;'
                }
        }
		
		var data = {
            name: $scope.name
        };
		
		
		$http.post(url, data, config).then(function (response) {
			$scope.postResultMessage = "Sucessful!";
		}, function (response) {
			$scope.postResultMessage = "Fail!";
		});
		
		$scope.name = "";

	}
});

app.controller('getallrobotsController', function($scope, $http, $location) {
	
	$scope.showAllRobots = false;

	$scope.getAllRobots = function() {
		var url = $location.absUrl() + "/findall";

		var config = {
			headers : {
				'Content-Type' : 'application/json;charset=utf-8;'
			}
		}

		$http.get(url, config).then(function(response) {

			if (response.data.status == "Done") {
				$scope.allrobots = response.data;
				$scope.showAllRobots = true;

			} else {
				$scope.getResultMessage = "get All Robots Data Error!";
			}

		}, function(response) {
			$scope.getResultMessage = "Fail!";
		});

	}
});

app.controller('getrobotController', function($scope, $http, $location) {
	
	$scope.showRobot = false;
	
	$scope.getRobot = function() {
		var url = $location.absUrl() + "/robot/" + $scope.robotId;

		var config = {
			headers : {
				'Content-Type' : 'application/json;charset=utf-8;'
			}
		}

		$http.get(url, config).then(function(response) {

			if (response.data.status == "Done") {
				$scope.robot = response.data;
				$scope.showRobot = true;

			} else {
				$scope.getResultMessage = "Robot Data Error!";
			}

		}, function(response) {
			$scope.getResultMessage = "Fail!";
		});

	}
});

app.controller('getrobotsbynameController', function($scope, $http, $location) {
	
	$scope.showRobotsByName = false;
	
	$scope.getRobotsByName = function() {
		var url = $location.absUrl() + "/name";

		var config = {
			headers : {	'Content-Type' : 'application/json;charset=utf-8;' },
		
			params: { 'name' : $scope.robotName }
		}

		$http.get(url, config).then(function(response) {

			if (response.data.status == "Done") {
				$scope.allrobotsbyname = response.data;
				$scope.showRobotsByName = true;

			} else {
				$scope.getResultMessage = "Robot Data Error!";
			}

		}, function(response) {
			$scope.getResultMessage = "Fail!";
		});

	}
});
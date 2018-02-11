<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<title>RBC Spring Boot Robot</title>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<script
	src="http://ajax.googleapis.com/ajax/libs/angularjs/1.6.0/angular.min.js"></script>
<script src="/js/angular.js"></script>
<link rel="stylesheet"
	href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" />
</head>
<body>
	<div class="container" ng-app="app">
		<h1>RBC - AngularJS - Spring JPA</h1>

		<div class="row">
			<div ng-controller="postController" class="col-md-3">
				<form name="robotForm" ng-submit="submitForm()">
					<label>Name</label>
					<input type="text" name="name"	class="form-control" ng-model="name" />
					
					
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
				<p>{{postResultMessage}}</p>
			</div>
		</div>
		<div class="row">
			<div ng-controller="getallrobotsController" class="col-md-3">
				<h3>All Robots</h3>

				<button ng-click="getAllRobots()">Get All Robots</button>

				<div ng-show="showAllRobots">
					<ul class="list-group">
						<li ng-repeat="robot in allrobots.data"><h4 class="list-group-item">
								<strong>Robot {{$index}}</strong><br />
								Id: {{robot.id}}<br />
								Name: {{robot.name}}<br />
						</h4></li>
					</ul>
				</div>
				<p>{{getResultMessage}}</p>
			</div>

			<div ng-controller="getrobotController" class="col-md-3">
				<h3>Robot by ID</h3>

				<input type="text" class="form-control" style="width: 100px;"
					ng-model="robotId" /> <br />
				<button ng-click="getRobot()">Get Robot</button>

				<div ng-show="showRobot">
					Id: {{robot.data.id}}<br />
					Name: {{robot.data.name}}
				</div>
				<p>{{getResultMessage}}</p>
			</div>

			<div ng-controller="getrobotsbynameController" class="col-md-4">
				<h3>Robots by Name</h3>

				<input type="text" class="form-control" style="width: 100px;" ng-model="robotName" /><br />
				<button ng-click="getRobotsByName()">Get Robots</button>

				<div ng-show="showRobotsByName">

					<ul class="list-group">
						<li ng-repeat="robot in allrobotsbyname.data"><h4	class="list-group-item">
								<strong>Robot {{$index}}</strong><br />
								Id: {{robot.id}}<br />
								Name: {{robot.name}}
						</h4></li>
					</ul>
				</div>
				<p>{{getResultMessage}}</p>
			</div>

		</div>
	</div>
</body>
</html>
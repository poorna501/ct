<!DOCTYPE html>
<html>
<script src="angular.js"></script>
<body>
	
<div ng-app="myApp" ng-controller="myCtrl">
	{{firstName + " " + secondName}};
</div>

<!-- firstName: <input ng-model="name" value="name">
<p>Hello : {{name}}</p> -->

<script type="text/javascript">
	var app = angular.module("myApp", []);
	app.controller("myCtrl", function($scope) {
		$scope.firstName = "poorna";
		$scope.secondName = "balla";
	});
	
	
</script>
</body>
</html>

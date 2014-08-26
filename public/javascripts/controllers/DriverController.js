function DriverController($scope, $http){
	$scope.drivers = [];

	$scope.newDriver = {
		name : "",
		twitter: ""
	};



	$scope.setDrivers = function(drivers){
		$scope.drivers = drivers;
	};

	$scope.update = function(driver){
		$http.put('/driver/' + driver._id + '.json', driver).success(function(data) {
			if(!data.driver){
				alert(JSON.stringify(data));
			}
		})
	};

	$scope.addNewDriver = function(){
		$http.post('/driver.json', $scope.newDriver).success(function(data) {
			if(data.driver){
				$scope.drivers.push(data.driver);
				$scope.newDriver.name = '';
				$scope.newDriver.twitter = '';
			} else {
				alert(JSON.stringify(data));
			}
		})
	};
}
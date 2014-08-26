function TeamController($scope, $http){
	$scope.teams = [];

	$scope.newTeam = {
		name :"",
		twitter : "",
		cars : []
	};

	$scope.setTeams = function(teams){
		$scope.teams = teams;
	};

	$scope.update = function(team){
		$http.put('/team/' + team._id + '.json', team).success(function(data) {
			if(!data.team){
				alert(JSON.stringify(data));
			}
		});
	};

	$scope.addNewTeam = function(){
		$http.post('/team.json', $scope.newTeam).success(function(data){
			if(data.team){
				$scope.teams.push(data.team);
				$scope.newTeam.name = '';
				$scope.newTeam.twitter = '';
				$scope.newTeam.cars = [];
			}
		})
	};
}
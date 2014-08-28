function RaceController($scope, $http){
	$scope.races = [];

	$scope.newRace = {
		name: "",
		twitter: "",
		date : "",
		teams: [],
		series: '',
	};

	$scope.setRaces = function(races){
		$scope.races = races;
	};

	$scope.update = function(race){
		$http.put('/race/' + race._id + '.json', race).success(function(data) {
			if(!data.tea) {
				alert(JSON.stringify(data));
			}
		});
	};

	$scope.addNewRace = function() {
		$http.post('/race.json', $scope.newRace).success(function(data){
			if(data.race){
				$scope.races.push(data.race);
				$scope.newRace.name = '';
				$scope.newRace.twitter = '';
				$scope.newRace.date = '';
				$scope.newRace.teams = [];
				$scope.newRace.series = '';
			} else {
				alert(JSON.stringify(data));
			}
		})
	};
}
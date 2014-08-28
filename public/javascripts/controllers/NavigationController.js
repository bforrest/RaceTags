function NavigationController($scope, $http){
	$scope.navlist =  [
	  { url: '/', title: 'Home / Casa'},
	  { url: 'teams', title: 'Teams'},
	  { url: 'drivers', title: 'Drivers'},
	  { url: 'race', title: 'Race'}
	];

	function detectRoute() {
	  angular.forEach($scope.navList, function(item) {
	    item.active = $location.path().match(new RegExp(item.url)) ? true : false;
	  });  
	}

	$scope.$on('$routeChangeSuccess', detectRoute);
}
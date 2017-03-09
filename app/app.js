var app = angular.module('pokedex', ['angularUtils.directives.dirPagination']);

app.controller('listdata',function($scope, $http){
	$scope.users = []; //declare an empty array
	$http.get("http://pokeapi.co/api/v2/pokemon/?limit=151").success(function(response){
		$scope.users = response;  //ajax request to fetch data into $scope.data

  });
  //function for 0 padding numbers
  $scope.pad = function(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  };

});

angular.module('Donation',[])
.controller('Controller',function ($scope, $http){
	//$scope.data={};
	
	
		return $http({
		method: 'POST',
		url: '/api/charge',
		})
		.then(function (res) {
			//console.log(res)
			// $scope.data=res.data;
		});

	
	
})
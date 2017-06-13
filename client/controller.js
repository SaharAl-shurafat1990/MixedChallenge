angular.module('Donation',[])
.controller('Controller',function ($scope, $http){
	$scope.donation={};
	$scope.donations={};
	
	
	$scope.show = function(){
		return $http({
			method: 'GET',
			url: '/api/getAll',
		})
		.then(function (res) {
			console.log(res.data)
			 $scope.donations=res.data;
			});

	}
	$scope.create=function(){
		console.log($scope.donation)

		return $http({
			method: 'POST',
			url: '/api/user',
			data: $scope.donation
		}).then(function (res) {
			return res;
		});

	}

})
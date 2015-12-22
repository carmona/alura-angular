angular.module('alurapic')
.controller('FotosController', function($scope, $http){
	var urlFotos = "http://localhost:3000/v1/fotos";
	$scope.fotos = [];
	var promise = $http.get(urlFotos);
	promise.then(function(retorno){
		$scope.fotos = retorno.data;
	}).catch(function(error){
		console.log(error);
	});

	$http.get(urlFotos)
	.success(function(fotos){
		$scope.fotos = fotos;
	}).error(function(erro){
		console.log(erro);
	})
});
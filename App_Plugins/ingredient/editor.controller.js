angular.module("umbraco")
	.controller("My.IngredientController", function($scope, ingredientResource){
			
		$scope.find = function(event, term){		
                $scope.ingredients = ingredientResource.search(term);
		};

        if(!angular.isArray($scope.model.value)){
            $scope.model.value = [];
        };
        $scope.remove = function(index) {
            $scope.model.value.splice(index, 1);
        };	

        $scope.select = function (ingredient){
            $scope.model.value.push(ingredient);
        };
        	
	});

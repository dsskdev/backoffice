angular.module("umbraco")
	.controller("My.IngredientController", function($scope, ingredientResource, assetsService){

        assetsService.loadJs("/app_plugins/ingredient/highcharts.min.js")
            .then(function(){	
		
            $scope.find = function(event, term){		
                    $scope.ingredients = ingredientResource.search(term);
            };

            $scope.renderChart = function(){
                var data = [];

                _.forEach($scope.model.value, function(ing){
                    if(ing.percentage){
                        data.push([ing.name,ing.percentage]);
                    }
                });

                $('#container')
                    .highcharts({
                        series:[{
                            type: 'pie',
                            data: data
                        }]
                    });
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
        	
	});

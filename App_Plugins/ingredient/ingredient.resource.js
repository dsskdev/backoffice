angular.module("umbraco.resources")
	.factory("ingredientResource", function($http){

	var myService = {};		
	
	myService.getAll = function(){
		return $http.get("Backoffice/Ingredient/IngredientApi/getAll");
	};

	myService.search = function(name){
		return $http.get("Backoffice/Ingredient/IngredientApi/getByName?name=" +
	name);
	};

	myService.getById = function(id){
		return $http.get("Backoffice/Ingredient/IngredientApi/getById?id=" + id);		
	};

	myService.save = function(ingredient){
		return $http.post("Backoffice/ingredient/IngredientApi/PostSave", ingredient);
	};

	myService.delete = function(id){
		return $http.delete("Backoffice/ingredient/IngredientApi/DeleteById?id=" + id);
	};

	return myService;
});

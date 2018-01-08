$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	/*Función que se encarga de mostrar asignar al parafo
con id pNews el texto "Nuevas recetas" */

/*function printNews(){ --> otra forma
	$('.newNotice').text("Nuevas recetas");
}

printNews();*/
	$(function printsNews(){
		$('.newNotice').text("Nuevas recetas");
	});











});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {

		for(var i =0; i < recipesArray.length; i++){//busco en el array los elementos con highlighted en true
			if(recipesArray[i].highlighted === true){
				var rPhotos = recipesArray[i]; // en variable photos guardo los elementos de recipesArray que son true
				renderRecipe(rPhotos); // envio el array rPhotos a la funcion renderRecipe
				console.log('Recipes: ', recipesArray[i]); // muestra enconsola las 6 recetas con true
			}
		}
	}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {

	
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}
/*Se oculta la flecha cuando se muestra index.html */
$('.js-back').hide();



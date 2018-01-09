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
/*	   $(".list-recipes").append("<span class='title-recipe'>" + recipe.title + "</span>" +
          "<span class='author-recipe'>" + recipe.source.name + "</span><img class='picture-img' src='img/recipes/640x480/" +
           recipe.name + ".jpg'>"); */ 
   

	$('.list-recipes').append(
		'<span class="title-recipe"><a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">'
		+ recipe.title + 
		'</span><span class="metadata-recipe"><span class="author-recipe"> '
		+ recipe.source.name 
		+ ' </span><span class="bookmarks-recipe"><span class="icon-bookmark"></span></span></span></span><img src="img/recipes/640x800/'
		+ recipe.name 
		+'.jpg"/></a></span>');

	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
/*	for(var i =0; i < activitiesArray.length; i++){//busco en el array los elementos con highlighted en true
      if(activitiesArray[i]){
        var activity = activitiesArray[i]; // en variable photos guardo los elementos de recipesArray que son true
        renderRecipe(activity); // envio el array rPhotos a la funcion renderRecipe
        console.log('Recipes: ', recipesArray[i]); // muestra enconsola las 6 recetas con true
      }
    }
*/
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/

/*var recipe = activitiesArray;*/
function renderActivity(recipe) {

  $('.wrapper-message').hide();
  for(var i = 0 ; i < activitiesArray.length ; i++){
  /*  var userAvatar = activitiesArray[i].userAvatar;  
    var userName = activitiesArray[i].userName;
    var recipeName = activitiesArray[i].recipeName;
    var text = activitiesArray[i].text;
    var place = activitiesArray[i].place;
    var img = activitiesArray[i].image;*/
      $('.list-activities').append(
      '<a href="#" class="item-activity"> ' +  
      '<span class="attribution">' +
      '<span class="avatar">' + 
      '<img src="' + activities.userAvatar + '" class="image-avatar">' +
      '</span>' + 
      '<span class="meta">' +
      '<span class="author">' + activities.userName + '</span> made ' + 
      '<span class="recipe">' + activities.recipeName + '</span>: ' + activities.text + 
      '<span class="location">&mdash;'+ activities.place + '</span></span></span>' +     
      '<div class="bg-image" style="background-image: url(' + activities.img + ')"></div>' +
      '</a>'
    )
  }
}


/*Se oculta la flecha cuando se muestra index.html */
$('.js-back').hide();



$(document).ready( function(){

  //esconder y mostrar iconos flecha y menú//
$('.hidden').toggle()


  $('.printNews').text('NUEVAS RECETAS');


	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
  for (var i = 0; i < recipesArray.length; i++) {
    if(recipesArray[i].highlighted == true){
      renderRecipe(recipesArray[i])
	//console.log('Recipes: ', recipesArray);//

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
$('.list-recipes').append('<h2 class="title-recipe">' +
  recipe.title+'"</h2><p class="author-recipe">'+ recipe.source.name+'</p> <img src="'+ 'img/recipes/320x350/'+ recipe.name + '.jpg" />');
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



$(document).ready( function(){
$('.js-back').show();
$('.js-menu').hide();

 console.log('Document ready Stage 7'); //Etapa 7 escribir un mensaje por consola

 /* etapa 8 y 9*/

 $('.js-show-recipe').click(function(){
    $('.page.recipe').removeClass('make'); 
    $('.js-show-recipe').addClass('active');
    $('.js-show-make').removeClass('active');
  });

  $('.js-show-make').click(function(){
    $('.page.recipe').addClass('make');
    $('.js-show-make').addClass('active');
    $('.js-show-recipe').removeClass('active');
  });

 $('.js-back').click(function(){     //funcion que al hacer click sobre la flecha regrese a la pagina index.html  Etapa 10
    window.location.href = "index.html";
  });
 });
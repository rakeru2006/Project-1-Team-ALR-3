
// Here we are building the URL we need to query the database



// Here we run our AJAX call to the OpenWeatherMap API
$(".ingredient-form").on("submit",function(event){
event.preventDefault();
  var mainIngredient = $("#ingredientFood").val();
  var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i="+ mainIngredient;

  console.log(mainIngredient);

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

    // Log the queryURL
    console.log(queryURL);

    // Log the resulting object
    console.log(response);
    console.log(response.meals[0].strMeal);
    console.log(response.meals[1].strMeal);
    console.log(response.meals[2].strMeal);
    console.log(response.meals[0].strMealThumb);
    console.log(response.meals[1].strMealThumb);
    console.log(response.meals[2].strMealThumb);


    // Transfer content to HTML
    $("#dishes-list").append("<h3>" + "Options using " + mainIngredient + "</h3>");
    
    $("#dishes-list").append("<li>" + response.meals[0].strMeal + "</li>");
    $("#img1").attr("src", response.meals[0].strMealThumb);
    $("#img1").show();
    
    $("#dishes-list").append("<li>" + response.meals[1].strMeal + "</li>"); 
    $("#img2").attr("src", response.meals[1].strMealThumb);
    $("#img2").show();

    $("#dishes-list").append("<li>" + response.meals[2].strMeal + "</li>"); 
    $("#img3").attr("src", response.meals[2].strMealThumb);
    $("#img3").show();
    

    
  
    
   
  });


});



$(".drink-form").on("click",function(event){
  event.preventDefault();
  // Here we are building the URL we need to query the database
  var ingDrink=$("#ingredientDrink").val();
  var queryURLdrink = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  //var queryURLdrink = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka";
  
  
  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
  url: queryURLdrink,
  method: "GET"
  })
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {
  
  // Log the queryURL
  console.log(queryURLdrink);
  
  // Log the resulting object
  console.log(response.drinks[0].strDrink);
  console.log(response.drinks[0].strIngredient1);
  console.log(response.drinks[0].strIngredient2);
  console.log(response.drinks[0].strIngredient3);
  console.log(response.drinks[0].strIngredient4);
  console.log(response.drinks[0].strInstructions);
  
      $("#img4").show();
       $("#dishes-drink").append("<h3>" + response.drinks[0].strDrink + "</h3>"); 
       $("#dishes-drink").append("<li>" + response.drinks[0].strIngredient1 + "</li>"); 
       $("#dishes-drink").append("<li>" + response.drinks[0].strIngredient2 + "</li>"); 
       $("#dishes-drink").append("<li>" + response.drinks[0].strIngredient3 + "</li>"); 
       $("#dishes-drink").append("<li>" + response.drinks[0].strIngredient4 + "</li>"); 
       $("#dishes-drink").append("<p>" + response.drinks[0].strInstructions + "</p>"); 
  
  
  
  });

});


//Carrousell call inicio Raque 

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.carousel').carousel();
});

//Carrousell call fin Raque 

//Video call fin Raque 
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

//tag.src = "https://www.youtube.com/iframe_api";
//Adding Id video
tag.src = "https://www.youtube.com/embed/6iSH2pqJsKI";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: '6iSH2pqJsKI',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

//Video call fin Raque 



 // Ading list  rake 
 window.onload = init;
 function init(){
     botonEnvio = document.querySelector('[type="button"]');
     nuevoItem = document.querySelector('[type="text"]');
     listaCompra = document.getElementById("listaCompra");
     
     botonEnvio.addEventListener("click",anadir);
 }

 function anadir(ingrediente){
     evento = ingrediente || window.event;
     if (nuevoItem.value == ""){
         evento.preventDefault();
     }else{
     var lista = document.createElement("li");
     lista.innerHTML = nuevoItem.value;
     lista.addEventListener("dblclick",eliminarLi);
     listaCompra.appendChild(lista);
     nuevoItem.value = "";
     }
 }
 function eliminarLi(){
     this.parentNode.removeChild(this);
 }

  // Ading list  rake end
/*
// Here we are building the URL we need to query the database
var ingrPrinc = "chicken";
var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i="+ingrPrinc ;


// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: queryURL,
  method: "GET"
})
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {

    // Log the queryURL
    console.log(queryURL);

    // Log the resulting object
    console.log(response);

    // Transfer content to HTML
for (var i=0; i< 5;i++)
{
            $("#food").html("<li>" + response.meals[i].strMeal+ " Food </li>");
            
}      
    
   
  });

  */
// Here we are building the URL we need to query the database
var ingDrink="vodka";
var queryURLdrink = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" +ingDrink;
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
console.log(response.ingredients[0].strIngredient);

// Transfer content to HTML
     $("#drink").append("<h1>" + response.ingredients[0].strIngredient+ " Drink </h1>");



});


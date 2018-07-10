var apiKey = "ii1cKp76UP9kphOInoWXkQHcjt0F5BGg";


$("button").on("click", function() {

    var superHero = $(this).attr("data-hero");

    var URL = "http://api.giphy.com/v1/gifs/search?q=" + superHero + "&api_key=" + apiKey + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
      })

      // functions here

      // for loop to create elements for each response
      // need to prepend at the end







});
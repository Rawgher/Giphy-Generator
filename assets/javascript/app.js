var apiKey = "ii1cKp76UP9kphOInoWXkQHcjt0F5BGg";


$("button").on("click", function() {

    var superHero = $(this).attr("data-hero");

    var URL = "http://api.giphy.com/v1/gifs/search?q=" + superHero + "&api_key=" + apiKey + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      // what responses looking for (still image, rating, )
      // functions here

      // for loop for making it happen 10 times
      for (var i = 0; i < results.length; i++) { // referred to response as results here, need to make a variable if going to do this
        var superHeroDiv = $("<div class='fl w-20'>");

        var p = $("<p>").text("Rating: " + results[i].rating); // once again, need to have results variable above to make this work

        var superHeroImage = $("<img>");

        superHeroImage.attr("src", );//need results still image reference here

        superHeroDiv.append(superHeroImage, p);

        $("#gifZone").html(superHeroDiv);

      }
      // need function for playing and pausing 

      // for loop to create elements for each response
      // need to have content overwrite previous stuff







});
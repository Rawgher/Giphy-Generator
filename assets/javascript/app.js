
var superHeros = ["Deadpool", "Superman", "Spiderman", "Dr. Strange"];

$("button").on("click", function() {

    var superHero = $(this).attr("data-hero");
    var apiKey = "ii1cKp76UP9kphOInoWXkQHcjt0F5BGg";

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + superHero + "&api_key=" + apiKey + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
          //grab response stuff here
          // what responses looking for (still image, rating, )
        var results = response.data;
      
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

    //   need function for playing and pausing 
    // need to use original still image and then the gif image source

      //for loop to create elements for each response
    //   need to have content overwrite previous stuff

});
});

function createButtons() {
    
    $("#buttonZone").empty();

    for (var i = 0; i < superHeros.length; i++) {
        var button = $("<a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-purple' href='#0'></a>");
        button.attr("data-hero", superHeros[i]);
        button.text(superHeros[i]);
        $("#buttonZone").append(button);

    }
}

$("#superHeroName").on("click", function(event){
    event.preventDefault();
    var superHero = $("#superHeroInput").val().trim();
    superHeros.push(superHero);
// find a way to get the text to disappear in input

    createButtons();
});

createButtons();
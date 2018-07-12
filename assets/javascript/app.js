
var superHeros = ["Deadpool", "Superman", "Spiderman", "Dr. Strange"];
// click function isnt working

// TODO make a loading screen that shows up first before the acutal gifs load
$(document).on("click", ".button", function () {
    $("#gifZone").empty();
    var superHero = $(this).attr("data-hero");

    var apiKey = "ii1cKp76UP9kphOInoWXkQHcjt0F5BGg";

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + superHero + "&api_key=" + apiKey + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            //grab response stuff here
            // what responses looking for (still image, rating, )
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                if (results[i].rating !== "r") {
                    var superHeroDiv = $("<div class='fl w-20'>");

                    var p = $("<p>").text("Rating: " + results[i].rating); 

                    var superHeroImage = $("<img class='gif'>");

                    // superHeroImage.attr("src", results[i].images.original_still.url);
                    superHeroImage.attr("src", results[i].images.fixed_width_still.url);

                    superHeroImage.attr("data-state", "still");

                    superHeroImage.attr("data-animate", results[i].images.fixed_width.url);

                    superHeroImage.attr("data-still", results[i].images.fixed_width_still.url);

                    superHeroDiv.append(superHeroImage, p);

                    $("#gifZone").append(superHeroDiv); 
 
                }

            }
                animateGif();
            //   need function for playing and pausing 
            // need to use original still image and then the gif image source

            //for loop to create elements for each response
            //   need to have content overwrite previous stuff

        });

});

function animateGif() {
$(".gif").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
}


function createButtons() {

    $("#buttonZone").empty();

    for (var i = 0; i < superHeros.length; i++) {
        var button = $("<a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-purple button' href='#0'></a>");
        button.attr("data-hero", superHeros[i]);
        button.text(superHeros[i]);
        $("#buttonZone").append(button);

    }
}

$("#superHeroName").on("click", function (event) {
    event.preventDefault();
    var supers = $("#superHeroInput").val().trim();
    superHeros.push(supers);
    // find a way to get the text to disappear in input

    createButtons();
});

createButtons();
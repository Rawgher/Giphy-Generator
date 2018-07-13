
var superHeros = ["Deadpool", "Superman", "Spiderman", "Dr. Strange"];

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
    // this calls the response from ajax
        .then(function (response) {
            var results = response.data;


            // for loop for creating each button
            for (var i = 0; i < results.length; i++) {
                if (results[i].rating !== "r") {
                    var superHeroDiv = $("<div class='fl w-third'>");

                    var p = $("<p>").text("Rating: " + results[i].rating); 

                    var superHeroImage = $("<img class='gif padding'>");

                    superHeroImage.attr("src", results[i].images.original_still.url);
                    // superHeroImage.attr("src", results[i].images.fixed_width_still.url);
                    //superHeroImage.attr("src", results[i].images.fixed_height_still.url);

                    superHeroImage.attr("data-state", "still");

                    superHeroImage.attr("data-animate", results[i].images.original.url);
                    // superHeroImage.attr("data-animate", results[i].images.fixed_width.url);
                    //superHeroImage.attr("data-animate", results[i].images.fixed_height.url);

                    //superHeroImage.attr("data-still", results[i].images.fixed_height_still.url);
                    // superHeroImage.attr("data-still", results[i].images.fixed_width_still.url);
                    superHeroImage.attr("data-still", results[i].images.original_still.url);

                    superHeroDiv.append(superHeroImage, p);

                    $("#gifZone").append(superHeroDiv); 
 
                }

            }
                animateGif();

        });

});


// this is my function for switching the codes state
function animateGif() {
$(".gif").on("click", function() {

    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
}

// this function creates the buttons to be clicked
function createButtons() {

    $("#buttonZone").empty();
// need to add padding to buttons to make them space properly, might needs divs for it
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
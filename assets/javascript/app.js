
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
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    var superHeroDiv = $("<div class='fl w-20'>");

                    var p = $("<p>").text("Rating: " + results[i].rating); // once again, need to have results variable above to make this work

                    var superHeroImage = $("<img>");

                    superHeroImage.attr("src", results[i].images.original_still.url);

                    superHeroDiv.append(superHeroImage, p);

                    $("#gifZone").append(superHeroDiv);

                }
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
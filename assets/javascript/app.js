
var superHeros = ["Deadpool", "Superman", "Spiderman", "Dr. Strange", "Batman", "Thor", "Ironman", "Black Panther", "The Flash", "Beast Boy", "Robin", "Starfire", "Luke Cage", "Daredevil", "The Hulk"];

$(document).ready(function () {

    $("#loadingZone").hide();

    $(document).on("click", ".button", function () {
        // $("#gifZone").empty();

        loadingGif();

        var superHero = $(this).attr("data-hero");

        var apiKey = "ii1cKp76UP9kphOInoWXkQHcjt0F5BGg";

        var offset = Math.floor((Math.random() * 1000) + 1);

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + superHero + "&api_key=" + apiKey + "&limit=10&offset=" + offset;

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
                        var superHeroDiv = $("<div>");

                        var p = $("<p class='centered'>").text("Rating: " + results[i].rating);

                        var superHeroImage = $("<img class='gif padding imgSize'>");

                        superHeroImage.attr("src", results[i].images.original_still.url);

                        superHeroImage.attr("data-state", "still");

                        superHeroImage.attr("data-animate", results[i].images.original.url);

                        superHeroImage.attr("data-still", results[i].images.original_still.url);

                        superHeroDiv.append(superHeroImage, p);

                        $("#gifZone").prepend(superHeroDiv);

                    }

                }
                animateGif();

            });

    });

    function loadingGif() {
        //     var apiKey = "ii1cKp76UP9kphOInoWXkQHcjt0F5BGg";
        //     var queryURL = "http://api.giphy.com/v1/gifs/search?q=kid+flash&api_key=" + apiKey + "&limit=6";

        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // })
        // // this calls the response from ajax
        //     .then(function (response) {
        //         console.log(response.data)
        //         var loadingResult = response.data[5].images.original.url;;

        var loadingDiv = $("<div>");
        //var img = $("<img src='" + loadingResult +"' class='fl w-100 loadingimg'>")
        var img = $("<img src='assets/images/loading.gif' class='fl w-100 loadingimg'>")
        var p = $("<h1 class='centered'>Loading...</h1>");
        loadingDiv.append(p, img);
        $("#loadingZone").html(loadingDiv);
        $("#gifZone").hide();
        $("#loadingZone").show();
        setTimeout(replaceIt, 3000);
        // });
    }

    function replaceIt() {
        // debugger;
        $("#loadingZone").hide();
        $("#gifZone").show();
    }

    // this is my function for switching the codes state
    function animateGif() {
        $(".gif").on("click", function () {

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
            var buttonDiv = $("<div class='fl padding'>");
            var button = $("<a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red button' href='#0'></a>");
            button.attr("data-hero", superHeros[i]);
            button.text(superHeros[i]);
            buttonDiv.append(button);
            $("#buttonZone").append(buttonDiv);
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

});



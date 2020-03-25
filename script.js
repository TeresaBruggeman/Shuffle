
$(document).ready(function () {
    // $("#push").on("click", function () {
    //     var queryURL = "https://poetrydb.org//lines/6:abs";

    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function (response) {
    //         // console.log(response);
    //         var poem = response[1].lines[3];
    //         var secondline = response[1].lines[4];
    //         // console.log(poem);
    //         $("#lines").append(poem, secondline);
    //     });
    // });

    //GIPHY API
    $(".zodbutton").on("click", function () {
        $("#card-three").empty();
        var zodiacSign = this.id;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + zodiacSign + "&api_key=VhztSlgEu1vKg29RVAQkT7bPmDTUMUEg";
        // console.log(zodiacSign)

        // https://api.giphy.com/v1/gifs/random?api_key=VhztSlgEu1vKg29RVAQkT7bPmDTUMUEg
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // console.log(response);
            var gipfyArray = [];
            for (var i = 0; i < response.data.length; i++) {
                gipfyArray.push(response.data[i])
            }
            // console.log(gipfyArray)
            var randomGiphy = gipfyArray[Math.floor(Math.random() * gipfyArray.length)];
            var randomImage = $("<img>").attr("src", randomGiphy.images.fixed_width_downsampled.url);
            // console.log(randomImage);
            $("#card-three").append(randomImage);

        });
    });

    // Random Phrase API
    $(".zodbutton").on("click", function () {
        var queryURL = "https://typeracingapi.rishikc.com/.netlify/functions/server/text/";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var randomPhrase = response.text;

            $("#card-two").append(randomPhrase);
        });
    });

    //Random Quote API
    // $("#quote").on("click", function () {
    //     var queryURL = "http://get-me-a-quote.herokuapp.com/?accept=json";

    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function (response) {
    //         console.log(response);
    //         var randomQuote = response.text;
    //         $("#random-quote").append(randomQuote);
    //     });
    // });

    //Horoscope API
    // $("#send").on("click", function () {
    //     var sign = $("#horoscope").val();
    //     console.log(sign);

    //     var queryURL = "https://cors-anywhere.herokuapp.com/https://horoscope-api.herokuapp.com/horoscope/today/" + sign;
    //     //              http://horoscope-api.herokuapp.com/horoscope/today/Libra
    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function (response) {
    //         console.log(response);
    //         console.log(sign);

    //         $("#zodiac").append(response.horoscope);
    //     });
    // });

    //this calls to the nasa picture of the day server, returns an image or video and displays it
    $(".zodbutton").on("click", function (event) {
        $("#card-one").empty();
        var sign = this.id;
        // console.log(sign);
        var queryURL = "https://images-api.nasa.gov/search?description=" + sign + "&media_type=image"
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (res) {
            // console.log(res);
            var imageUrl = res.collection.items[0].links[0].href
            // console.log(res.collection.items[0].links[0].href);
            var nasaImage = $("<img>");
            nasaImage.attr("src", imageUrl);
            nasaImage.addClass("nasa");
            $("#card-one").append(nasaImage);
        });
    });
    // don't think we are using this after all
    // for now, this looks up a user entered word but will be updated to longest word from horiscope
    // $("#dictionaryButton").on("click", function () {
    //     var inputWord = $("#inputWord")
    //         .val()
    //         .trim();
    //     console.log(inputWord);
    //     var queryURL = "https://www.dictionaryapi.com/api/v3/references/learners/json/" + inputWord + "?key=f7b3abf4-fb20-401a-9854-99b48ba1805f";
    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function (response) {
    //         console.log(response);
    //         var results = response[0];
    //         console.log(response[0]);
    //         var dictData = results.shortdef[0];
    //         $("#dictionary").append(inputWord + " - ");
    //         $("#dictionary").append("<p id='defintion'>" + dictData + "</p>");
    //     });
    // });

}); 


$("#push").on("click", function () {

    var queryURL = "http://poetrydb.org//lines/6:abs";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var poem = response[1].lines[3];
        var secondline = response[1].lines[4];
        console.log(poem);
        $("#lines").append(poem, secondline);
    })
})
$("#pic").on("click", function () {

    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=VhztSlgEu1vKg29RVAQkT7bPmDTUMUEg";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var randomImage = $("<img>");
        console.log(randomImage);
        randomImage.attr("src", response.data.images.original_still.url);
        $("#pix").append(randomImage);
    });
})
$("#phrase").on("click", function () {


    var queryURL = "https://typeracingapi.rishikc.com/.netlify/functions/server/text/"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var randomPhrase = response.text;


        $("#text").append(randomPhrase);
    });
})
$("#quote").on("click", function () {

    var queryURL = "http://get-me-a-quote.herokuapp.com/?accept=json";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var randomQuote = response.text;
        $("#random-quote").append(randomQuote);

    });

})

$("#send").on("click", function () {
    var sign = $("#horoscope").val();

    var queryURL = "http://horoscope-api.herokuapp.com/horoscope/today/" + sign
    //              http://horoscope-api.herokuapp.com/horoscope/today/Libra
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(sign);

        $("#zodiac").append(response.horoscope);

    });

})
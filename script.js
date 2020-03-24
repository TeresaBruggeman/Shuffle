// added so script.js waits for JQuery call
$(document).ready(function() {
  $("#push").on("click", function() {
    var queryURL = "https://poetrydb.org//lines/6:abs";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var poem = response[1].lines[3];
      var secondline = response[1].lines[4];
      console.log(poem);
      $("#lines").append(poem, secondline);
    });
  });

  //GIPHY API
  $("#pic").on("click", function() {
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=VhztSlgEu1vKg29RVAQkT7bPmDTUMUEg";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var randomImage = $("<img>");
      console.log(randomImage);
      randomImage.attr("src", response.data.images.original_still.url);
      $("#pix").append(randomImage);
    });
  });

  //Random Phrase API
  $("#phrase").on("click", function() {
    var queryURL = "https://typeracingapi.rishikc.com/.netlify/functions/server/text/";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var randomPhrase = response.text;

      $("#text").append(randomPhrase);
    });
  });

  //Random Quote API
  $("#quote").on("click", function() {
    var queryURL = "http://get-me-a-quote.herokuapp.com/?accept=json";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var randomQuote = response.text;
      $("#random-quote").append(randomQuote);
    });
  });

  //Horoscope API
  $("#send").on("click", function() {
    var sign = $("#horoscope").val();
    console.log(sign);

    var queryURL = "https://horoscope-api.herokuapp.com/horoscope/today/" + sign;
    //              http://horoscope-api.herokuapp.com/horoscope/today/Libra
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      console.log(sign);

      $("#zodiac").append(response.horoscope);
    });
  });

  //this calls to the nasa picture of the day server, returns an image or video and displays it
  $("#nasaButton").on("click", function() {
    var queryURL = "https://api.nasa.gov/planetary/apod?api_key=Qf0CKn3PbG3Sdd9uf75wORcuvuKeU5TlzPaSNZER";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      //console.log("NASA" + JSON(stringify).response);
      var nasaImage = $("<iframe>");
      var nasaDate = response.date;
      console.log(response.date);
      console.log(response.url);
      nasaImage.attr("src", response.url);
      $("#nasa").append(nasaImage);
    });
  });

  // for now, this looks up a user entered word but will be updated to longest word from horiscope
  $("#dictionaryButton").on("click", function() {
    var inputWord = $("#inputWord")
      .val()
      .trim();
    console.log(inputWord);
    var queryURL = "https://www.dictionaryapi.com/api/v3/references/learners/json/" + inputWord + "?key=f7b3abf4-fb20-401a-9854-99b48ba1805f";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var results = response[0];
      console.log(response[0]);
      var dictData = results.shortdef[0];
      $("#dictionary").append(inputWord + " - ");
      $("#dictionary").append("<p id='defintion'>" + dictData + "</p>");
    });
  });
}); //closing for document ready function

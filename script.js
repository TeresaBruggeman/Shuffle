
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

    $(".zodbutton").on("click", function () {
        var zodiacValue = this.id;
        if (zodiacValue === "leo") {
            var leo = ["leo", "Lion", "Bold", "confident", "bright", "creative", "charming", "egotistical", "proud", "dramatic", "arrogant"]
            var searchWord = leo[Math.floor(Math.random() * leo.length)]
        }
        if (zodiacValue === "taurus") {
            var taurus = ["taurus", "Bull", "affectionate", "sensual", "beauty", "luxury", "money", "romance", "patient", "determined", "stubborn"]
            var searchWord = taurus[Math.floor(Math.random() * taurus.length)]
        }
        if (zodiacValue === "pisces") {
            var pisces = ["pisces", "Fish", "dreamy", "artistic", "creativity", "fantasy", "deception", "curious", "compassionate", "empathy"]
            var searchWord = pisces[Math.floor(Math.random() * pisces.length)]
        }
        if (zodiacValue === "libra") {
            var libra = ["libra", "Scales", "Aesthetics", "harmony", "grace", "charisma", "style", "wealth", "justice", "honesty", "fairness", "balance"]
            var searchWord = libra[Math.floor(Math.random() * libra.length)]
        }
        if (zodiacValue === "sagittarius") {
            var sagittarius = ["sagittarius", "Archer", "Philosophical", "adventurous", "positive", "outgoing", "enlightened", "fiery", "free", "fun", "friendly", "reckless"]
            var searchWord = sagittarius[Math.floor(Math.random() * sagittarius.length)]
        }
        if (zodiacValue === "virgo") {
            var virgo = ["virgo", "Left-brained", "logical", "analytical", "rational", "efficient", "perfectionism", "communicative"]
            var searchWord = virgo[Math.floor(Math.random() * virgo.length)]
        }
        if (zodiacValue === "capricorn") {
            var capricorn = ["capricorn", "Goat", "Hardworking", "ambitious", "practical", "responsible", "committed", "disciplined", "slow", "steady"]
            var searchWord = capricorn[Math.floor(Math.random() * capricorn.length)]
        }
        if (zodiacValue === "aries") {
            var aries = ["aries", "Ram", "Passionate", "aggressive", "primal", "forceful", "confident", "fiery", "leader", "courageous", "competitive", "strong"]
            var searchWord = aries[Math.floor(Math.random() * aries.length)]
        }
        if (zodiacValue === "cancer") {
            var cancer = ["cancer", "Crab", "Emotional", "sensitive", "hermit", "moody", "loyal", "nurturing", "security", "intuitive"]
            var searchWord = cancer[Math.floor(Math.random() * cancer.length)]
        }
        if (zodiacValue === "aquarius") {
            var aquarius = ["aquarius", "Water-Bearer", "progressive", "eccentric", "revolutionary", "individuality", "radical", "mad-scientist", "inventor"]
            var searchWord = aquarius[Math.floor(Math.random() * aquarius.length)]
        }
        if (zodiacValue === "scorpio") {
            var scorpio = ["Scorpion", "Mysterious", "magnetic", "dark", "vitality", "aggressive", "secretive", "transformation", "questions"]
            var searchWord = scorpio[Math.floor(Math.random() * scorpio.length)]
        }
        if (zodiacValue === "gemini") {
            var gemini = ["gemini", "Twins", "quick - witted", "clever", "intellectual", "expressive", "communicative"]
            var searchWord = gemini[Math.floor(Math.random() * gemini.length)]
        }
        console.log(searchWord)
        renderZodiac(searchWord)
    });

    function renderZodiac(searchWord) {
        $("#card-three").empty();
        // var zodiacSign = this.id;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchWord + "&api_key=VhztSlgEu1vKg29RVAQkT7bPmDTUMUEg";
        // console.log(zodiacSign)

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
            var wordDisplay = $("<h1>").text(searchWord);
            var randomImage = $("<img>").attr("src", randomGiphy.images.fixed_width_downsampled.url).attr("style", "margin-top:50px");
            // console.log(randomImage);
            $("#card-three").append(wordDisplay, randomImage);
        });
    }

    // Random Phrase API
    $(".zodbutton").on("click", function () {
        var queryURL = "https://typeracingapi.rishikc.com/.netlify/functions/server/text/";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // console.log(response);
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
        // no images in database for scorpio so use it's planets instead
        if (sign == "scorpio") {
            scorpio = ["pluto", "mars"]
            var sign = scorpio[Math.floor(Math.random() * scorpio.length)]
            console.log(sign);
        }
        //var queryURL = "https://images-api.nasa.gov/search?&description=" + sign + "&media_type=image&center=msfc"
        var queryURL = "https://images-api.nasa.gov/search?&description=" + sign + "&media_type=image"
        console.log(queryURL)
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (res) {
            //error trapping- if no items are returned, use saved image
            if (res.collection.items.length === 0) {
                console.log(true);
                console.log(res);
                var imageUrl = "nasa-alt-imag.jpg"
                var nasaImage = $("<img>");
                nasaImage.attr("src", imageUrl);
                nasaImage.css("width", "100%");
                nasaImage.addClass("nasa");
                $("#card-one").append(nasaImage);  
            }
            //error trapping- otherwise use first image they returned
            else {
                console.log(false)
                console.log(res);
                var imageUrl = res.collection.items[0].links[0].href
                // console.log(res.collection.items[0].links[0].href);
                var nasaImage = $("<img>");
                nasaImage.attr("src", imageUrl);
                nasaImage.css("width", "100%");
                nasaImage.addClass("nasa");
                $("#card-one").append(nasaImage);
            }
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

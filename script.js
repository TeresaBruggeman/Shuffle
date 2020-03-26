$(document).ready(function () {
    // Global Vars

    // imgflip.com meme IDs for meme card
    var imgFlipZodaicIDs = {
        taurus:["172511443","137057825"]
    }

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
            $("#card-two").empty();
            $("#card-two").append(randomPhrase);
        });
    });    

    //this calls to the nasa picture of the day server, returns an image or video and displays it
    $(".zodbutton").on("click", function (event) {
        $("#card-one").empty();
        var sign = this.id;
        
        // no images in database for scorpio so use it's planets instead
        if (sign == "scorpio") {
            scorpio = ["pluto", "mars"]
            var sign = scorpio[Math.floor(Math.random() * scorpio.length)]
            console.log(sign);
        }
        
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
                var nasaImage = $("<img>").attr("src", imageUrl).css({"width": "100%", "max-height": "100%"});                
                var wordDisplay = $("<h3>").text(searchTitle).css({"position": "absolute", "bottom": "3px", "padding": "0 5%"});
                var blurbText ="Image courtesy of NASA Image and Video Library"
                var nasaBlurb = $("<a>").text(blurbText).attr("target", "_blank").attr("href", "https://images.nasa.gov/").css({"display": "block", "font-size": "50%", "font-style": "italic", "color": "inherit"}).appendTo(wordDisplay);
                var nasaDiv = $("<div>").attr("id", "nasaDiv").css({ "height": "inherit"}).append(nasaImage, wordDisplay);
                $("#card-one").append(nasaDiv);
            }
            //error trapping- otherwise use first image they returned
            else {
                console.log(false);
                console.log(res);
                if (res.collection.metadata.total_hits < 100) {
                    var arrNum = [Math.floor(Math.random() * res.collection.metadata.total_hits)];
                }
                else {
                    var arrNum = [Math.floor(Math.random() * 100)];
                }
                var imageUrl = res.collection.items[arrNum].links[0].href;                
                var searchTitle = res.collection.items[arrNum].data[0].title;                
                var nasaImage = $("<img>").attr("src", imageUrl).css({"width": "100%", "max-height": "100%"});
                var wordDisplay = $("<h3>").text(searchTitle).css({"position": "absolute", "bottom": "3px", "padding": "0 5%"});
                var blurbText ="Image courtesy of NASA Image and Video Library"
                var nasaBlurb = $("<a>").text(blurbText).attr("target", "_blank").attr("href", "https://images.nasa.gov/").css({"display": "block", "font-size": "50%", "font-style": "italic", "color": "inherit"}).appendTo(wordDisplay);
                var nasaDiv = $("<div>").attr("id", "nasaDiv").css({ "height": "inherit"}).append(nasaImage, wordDisplay);
                $("#card-one").append(nasaDiv);                                  
            };
        });
    });

}); 

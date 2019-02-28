//read and set any environment variables with the dotenv package:
require("dotenv").config();

//variable to store & import keys.js file
var keys = require("./keys.js");
var request = require("request");
var fs = require ("fs");
var spotify = require("node-spotify-api");
var axios = require("axios");


// stored arguments/ input array
var userInput = process.argv;
var userAction = userInput[2];

// variable to store movie, song, or concert
var input = "";

//for loop attaching multiple word arguments
for (var i = 3; i < userInput.length; i++) {

    if (i > 3 && i <userInput.length) {

        input = input + "+" + userInput[i];

    } else {

        input += userInput[i];
    }
}

// switch case
switch (userAction) {
    case "concert-this":
    concertThis();
    break;

    case "spotify-this-song":
    if (input){
        spotifyThis(input);
    } else {
    //     spotifyThis("")
    }
    break;

    case "movie-this":
    if (input){
        movieThis(input);
    } else {
        movieThis("Mr. Nobody")
    }
    break;

    case "do-what-it-says":
    doThisThing();
    break;

    default:
        console.log("{Please enter: concert-this, spotify-this-song, movie-this, or do-what-it-says}");
    break;
}



var concertThis = function () {

}

var spotifyThis = function () {

}

var movieThis = function (movieName) {

    var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


// Requesting through axios then logging title, year, rating, rotten tomatoes rating, country, language, plot, actors to terminal.  
    request(queryURL, function (error, response, body) {
        

    // if (movieName === "") {

    //     movieName = 'Mr. Nobody';
    // }

  

    // if (movieName === "") {

    //     movieName = 'Mr. Nobody';
    // }

        console.log("Title of the movie: " + JSON.parse(body).Title);
        console.log("Release year: " + JSON.parse(body).Year);
        console.log("Movie rating: " + JSON.parse(body).imdbRating);
        // console.log("Rotten Tomatoes rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("Country of origin: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Movie plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);

    }
)
};



// var spotify = new Spotify(keys.spotifyKeys);

// fs.readFile("random.txt","utf8", function(err,data) {
//     if (err) {
//         return console.log(err);
//     }
// }
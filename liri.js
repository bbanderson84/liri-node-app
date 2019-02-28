//read and set any environment variables with the dotenv package:
require("dotenv").config();

//variable to store & import keys.js file
var keys = require("./keys.js");

var fs = require ("fs");
var Spotify = require("node-spotify-api");
var axios = require("axios");


var userInput = process.argv;
var userAction = userInput[2];
var secondInput = userInput[3];

switch (userAction) {
    case "movie-this":
    movie(secondInput);
    break;

}

function movie (secondInput) {
// create empty variable for holding the movie title
var movieName = "";

// loop through all of the words in the argument
//use for loop to handle inclusion of "+"'s
// for (var i = 2; i < userInput.length; i++) {

//     if (i > 2 && i < userInput.length) {
//         movieName = movieName + "+" + userInput[i];

//     }
//     else {
//         movieName += userInput[i];
//     }
// }

// Run request with axios to OMDB API with movie specified 
var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// for debug
// console.log(queryURL);

// Requesting through axios then logging title, year, rating, rotten tomatoes rating, country, language, plot, actors to terminal.
request(queryURL, function (error, response, body) {

    // if (movieName === "") {

    //     movieName = 'Mr. Nobody';
    // }

    for (var i = 2; i < userInput.length; i++) {

        if (i > 2 && i < userInput.length) {
            movieName = movieName + "+" + userInput[i];
        }
        else {
            movieName += userInput[i];
        }
    }

    if (movieName === "") {

        movieName = 'Mr. Nobody';
    }

        console.log("Title of the movie: " + JSON.parse(body).Title);
        console.log("Release year: " + response.data.Year);
        console.log("Movie rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);
        console.log("Country of origin: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Movie plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);

    }
)
};



// var spotify = new Spotify(keys.spotifyKeys);

// fs.readFile("random.txt","utf8", function(err,data) {
//     if (err) {
//         return console.log(err);
//     }
// }
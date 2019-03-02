//read and set any environment variables with the dotenv package:
require("dotenv").config();

//variable to store & import keys.js file
var keys = require("./keys.js");
var request = require("request");
var fs = require ("fs");
var Spotify = require("node-spotify-api");
var axios = require("axios");

var spotify = new Spotify(keys.spotify);


// stored arguments/ input array
var userInput = process.argv[2];
var userAction = process.argv[3];
runApp();




function runApp() {
// switch case
switch (userInput) {
    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifyThis();
        break;

    case "movie-this":
        // movieThis(userAction);
        movieThis();
        break;

    case "do-what-it-says":
        doThisThing();
        break;
   }
}


// var concertThis = function () {

// }


function spotifyThis() {
    if (!userAction) {
    
        userAction = "the sign by ace of base"
    }
    
        spotify.search({ type: 'track', query: userAction }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
    
            // need to code is no song default to ace of base
            var data = data.tracks.items[0];
            console.log(data.artists[0].name);
            console.log(data.name);
            console.log(data.preview_url);
            console.log(data.album.name);
            

        });
    }

function movieThis() {

    var input = "";

    for (var i = 2; i < userInput.length; i++) {
        if ( i > 2 && i < userInput.length){
            input = input + "+" + userInput[i];
        } else {
            input += userInput[i];
        }
    }
        if (userAction === undefined){

            userAction = 'Mr. Nobody';

            }

        var queryURL = "http://www.omdbapi.com/?t=" + userAction + "&y=&plot=short&apikey=trilogy";
        
        request(queryURL, function(error, response, body) {

      
        if (!error && response.statusCode === 200) {
    
                console.log("Title: " + JSON.parse(body).Title);
                console.log("Release Year: " + JSON.parse(body).Year);
                console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
                console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
                console.log("Country: " + JSON.parse(body).Country);
                console.log("Language: " + JSON.parse(body).Language);
                console.log("Plot: " + JSON.parse(body).Plot);
                console.log("Actors: " + JSON.parse(body).Actors);
            };
        });
    };
    
    function doThisThing() {

        fs.readFile("random.txt", "utf8", function(error, data){
            if(error){
               return  console.log(error)
            }
        data = data.split(",");
        action = data[0];
        userChoice = data[1];
    
        runApp();
        });
    }
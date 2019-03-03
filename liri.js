//read and set any environment variables with the dotenv package:
require("dotenv").config();

//global variables
var keys = require("./keys.js");
var request = require("request");
var fs = require ("fs");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var spotify = new Spotify(keys.spotify);


// stored arguments/ input array
var userInput = process.argv[2];
var userAction = process.argv.slice(3).join(" ");
runApp();


// created a function including the swith case 
function runApp() {

// switch case for the user input argument
switch (userInput) {
    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifyThis();
        break;

    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
        doThisThing();
        break;
   }
}

// concert-this function
 function concertThis () {

    var queryURL = "https://rest.bandsintown.com/artists/" + userAction + "/events?app_id=codingbootcamp";

    request(queryURL, function(error, response, body) {

            // if there's an error, console log the error
            if (error) console.log(error);

            // sets result variable, if everything in search goes right, console logs venue name, location, and date of concert using moment.js
            var result = JSON.parse(body)[0];

            if (!error && response.statusCode === 200) {
                // console.log("-----------------------------" + "\nVenue Name: " + result.venue.name + "\nVenue Location: " + result.venue.city +  "\nDate: " + moment(result.dateTime).format("MM/DD/YYYY"));
                var text = "-----------------------------" + "\nVenue Name: " + result.venue.name + "\nVenue Location: " + result.venue.city +  "\nDate: " + moment(result.dateTime).format("MM/DD/YYYY") + "\n-----------------------------";
                
                console.log(text);

                fs.appendFile("log.txt", text, function (error) {

                    if (error) {
        
                        console.log(error);
                      }
        
                      else {
                        console.log("Content Added!");
                      }
        
                });
              
              
            };

        });

    }    
       
// spotify-this function
function spotifyThis() {

    // if there is an error in user action, or nothing is entered, default search is to "The Sign" by Ace of Bass
    if (!userAction) {
    
        userAction = "the sign by ace of base"
    }
    
        // spotify searches the song name the user enters, if there is an erorr returns the erro
        spotify.search({ type: 'track', query: userAction }, function (err, data) {

            if (err) {

                return console.log('Error occurred: ' + err);

            }
    
            // sets data variable, console los the artist name, song title, preview url, and album name
            var data = data.tracks.items[0];
          
            // adds text to log.text file
            var text = "-----------------------------" + "\nArtist: " + data.artists[0].name + "\nSong: " + data.name + "\nPreview URL: " + data.preview_url + "\nAlbum: " + data.album.name + "-----------------------------";
            
        
            console.log(text);
            
            fs.appendFile("log.txt", text, function (error) {
    
                if (error) {
    
                    console.log(error);
                  }
    
                  else {
                    console.log("Content Added!");
                  }
    
            });
          
        });
    }

// movie-this function
function movieThis() {

    // if there is an error, or user does not enter a movie title, it defaults the search to "Mr. Nobody"
    if (!userAction){

        userAction = 'Mr. Nobody';

        console.log("-----------------------------" + "\nIf you haven't watched Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/" + "\nIt's on Netflix!");

    }

        var queryURL = "http://www.omdbapi.com/?t=" + userAction + "&y=&plot=short&apikey=trilogy";
        
        request(queryURL, function(error, response, body) {

    // if search is correct, console logs title, release year, IMDB rating, rotten tomatoes rating, country, language, plot, actors
    if (!error && response.statusCode === 200) {
        
        var text = "-----------------------------" + "\nTitle: " + JSON.parse(body).Title + "\nRelease Year: " + JSON.parse(body).Year + "\nIMDB Rating: " + JSON.parse(body).imdbRating + "\nRotten Tomatoes Rating: " + JSON.parse(body).tomatoRating + "\nCountry: " + JSON.parse(body).Country + "\nLanguage: " + JSON.parse(body).Language + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors;

        console.log(text);
        
        fs.appendFile("log.txt", text, function (error) {

            if (error) {

                console.log(error);
              }

              else {
                console.log("Content Added!");
              }

        });
               
            };
        });
    };

// do-what-it-says function
function doThisThing() {

        // reads the information located in "random.txt", console logs error if there is one
        fs.readFile("random.txt", "utf8", function(error, data){
            if(error){
               return  console.log(error)
            }
        data = data.split(",");
        userInput = data[0];
        userAction = data[1];
    
        runApp();
        });
    }
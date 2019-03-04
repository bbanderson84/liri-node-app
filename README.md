# liri-node-app

## Creaed a LIRI APP - LIRI is a Language Interpretation and Recognition Interface. It is a command line node app that takes in parameters and gives back data to the user.

### LIRI will search Spotify for song titles, Bands in Town for concerts, and OMDB for movie titles.

### Please find screen shots and a link to the video, located at the bottom of this markdown, that show the user flow of the application and the outcome. 

#### The command lines below can be accepted by LIRI: Use arguments without quotes. 

* concert-this <"artist/band name here">
* spotify-this-song <"song name here">
* movie-this <"movie title here">
* do-what-it-says

#### concert-this will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:
###### Name of the venue
###### Venue location
###### Date of the Event (use moment to format this as "MM/DD/YYYY")


#### spotify-this-song will search the Spotify API for an artist and render the following information to the terminal:
###### Artist(s)
###### The song's name
###### A preview link of the song from Spotify
###### The album that the song is from

###### If an error occurs, it will show in terminal. If user does not enter a song title, it will default to "The Sign" by Ace of Bass.

#### movie-this will search the OMBD API for a movie and render the following information to the terminal:
###### Title of the movie.
###### Year the movie came out.
###### IMDB Rating of the movie.
###### Rotten Tomatoes Rating of the movie.
###### Country where the movie was produced.
###### Language of the movie.
###### Plot of the movie.
###### Actors in the movie.

###### If an error occurs, it will show in terminal. If user does not enter a movie title, it will default to "Mr. Nobody".

#### do-what-it-says will use the fs Node package, take the text inside of random.txt and then use it to call one of LIRI's commands.
###### * It should run spotify-this-song for "I Want it That Way".

##### A log of all of the data retrieved in these searches will also be printed to "log.txt


#### concert-this example
![Concert this example](/images/concert-this.png)

#### spotify-this-song example 
![Spotify this example](/images/spotify-this-song.png)

#### movie-this example
![Movie this example](/images/movie-this.png)

#### movie-this example 2 (no movie title entered)
![Movie this example2](/images/movie-this-blank.png)

#### do-what-it-says example
![Do What It Says example](/images/do-what-it-says.png)

#### shows the data that is written to log.txt
![Log.txt](/images/logtxt.png)


https://drive.google.com/open?id=1jcUDswQEnd5y_tpn2z6Vn2KmmZ3F9vyv - Link to example video of going through user process for LIRI Bot app.
[Video example](https://drive.google.com/open?id=1jcUDswQEnd5y_tpn2z6Vn2KmmZ3F9vyv)




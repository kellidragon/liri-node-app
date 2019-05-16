//Dependencies------------------------>
require("dotenv").config();

var Spotify = require("node-spotify-api");
var keys = require("./keys");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");

var spotify = new Spotify(keys.spotify);


//-------FUNCTIONS--------->
function runFunctions(userData1, userData2){
runSpotify(userData2);
getMovie(userData2); 
getBands(userData2); 
doWhatItSays(userData1); 
}

runFunctions(process.argv[2], process.argv[3]);
//------------------------------------------------SPOTIFY /doesnt recogniize name---------------------------------------------->

function runSpotify(song) {

    
    if (process.argv[2] === 'spotify-this-song') {
       
        if (song === undefined) {
            song = "The Sign";
        }
        spotify.search(
            {
                type: "track",
                query: song ,
                limit: 1
            },
            function (err, data) {
                if (err) {
                    console.log("Error occurred: " + err);
                    return;
                }

                var songData = data.tracks.items;


                for (var i = 0; i < songData.length; i++) {
                    console.log("Artist: " + songData[i].artists.name);
                    console.log("Song Title: " + songData[i].name);
                    console.log("Preview This Song: " + songData[i].preview_url);
                    console.log("Album: " + songData[i].album.name);


                }
            }

        )
    }
}



//------------------------------------------------OMDB API ---------------------------------------------->
function getMovie(movie) {

    if (process.argv[2] === 'movie-this') {

        if (movie === undefined) {
            movie = "Mr Nobody";
        };

        axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
            function (response) {
                console.log("Title: " + response.data.Title);
                console.log("Year Released: " + response.data.Released);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Taomatoes: " + response.data.Ratings[1].Value);
                console.log("Country: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
            }
        );

    }
}




//------------------------------------------------BANDS IN TOWN ---------------------------------------------->
function getBands(band) {


    if (process.argv[2] === 'concert-this') {


        axios.get("https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp").then(
            function (response) {

                var bandsData = response.data;

                if (!bandsData.length) {
                    console.log("No results for this band found");
                    return;
                } else {

                    console.log("Upcoming concerts for " + band + ":");

                    for (var i = 0; i < bandsData.length; i++) {
                        var show = bandsData[i];


                        console.log("Venue Name: " + show.venue.name);
                        console.log("Venue Location: " + show.venue.city);
                        console.log("Event Date: " + moment(show.datetime).format("MM/DD/YYYY"));

                    }
                }
            }
        )

    }
};





//------------------------------------------------DO WHAT IT SAYS---------------------------------------------->
function doWhatItSays() {
    if (process.argv[2] === 'do-what-it-says') {
        fs.readFile("random.txt", "utf8", function (error, data) {
            // console.log(data);
            var dataArr = data.split(",");

            if (error) {
                return console.log(error);
            }

            if (dataArr.length === 2) {
                process.argv[2] = dataArr[0];
                process.argv[3] = dataArr[1];
                runSpotify(process.argv[3]);
            
            } else if (dataArr.length === 1) {
                process.argv[2] = dataArr[0];
                runSpotify(dataArr[1]);
            }



        });
    }
};



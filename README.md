# Liri-Node.js-App


Created On: 05/15/19
Created By: Kelli Dragon dragonkelli@gmail.com

LIRI is a play on iphone's SIRI. While SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data. LIRI will display data for your favorite artists/bands, songs, and movies. Use the following commands along with specific parameters to get data from LIRI

* concert-this <band/artist name>

* spotify-this-song <song name>

* movie-this <movie name>

* do-what-it-says 


HOW TO USE LIRI:

Video guide here:  https://drive.google.com/file/d/1A1Ui2u0C7i3mTvifYl-zLUWCGCRtNOf9/view

    1. Open your terminal 

    2. Navigate to the folder that contains the liri.js file.

    3. Depending on the command you run, the output will vary.

    4. Run the concert-this command: node liri.js concert-this <name of artist or band>
    //Output: The system will display a list of all events where the specified artist will perform: Venue, Location, and Date.
    
    5. Run the spotify-this-song command: node liri.js spotify-this-song <name of song>
    //Output: The system will display a list of information associated with the song such as artist name, song name, preview link of the song from Spotify, song album. If no song is selected the program will default to "The Sign" by Ace of Bsae.
    
    6. Run the movie-this command:  node liri.js movie-this <name of movie>
    //Output: The system will display information associated with the movie such as title, year, ratings, country, language, plot, and actors. If no movie is selected the program will default to "Mr. Nobody".
    
    7. Run the do-what-it-says command: node liri.js do-what-it-says. 
    //Output: The system will read the text in the random.txt file, and perform the comman listed in the random.txt file.




TECHNOLOGIES USED:

        * Javascript
        * Nodejs
        * Node packages:
            * Node-Spotify-API
            * Request
            * Moment
            * DotEnv
        * APIs used:
            * Bands in Town
            * OMDB
            * Spotify
        * Git
        * GitHub


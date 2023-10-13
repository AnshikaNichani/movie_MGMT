let allMovies = [];
let resultElement = document.getElementById("result");
//let generateOutput = () => {
//    let output = '<div>---------------- running program...... ----------------</div>'
//    document.getElementById('output').innerHTML = output;
//}
//generateOutput();


//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie { 
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}
  
//This function adds a movie object to the array of all movie objects.
let addMovie = (movie) => {
    allMovies.push(movie);
    resultElement.innerHTML += "  A new movie is added\n <br> ";
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    //let resultElement = document.getElementById("result");
    resultElement.innerHTML += "  Printing all movies...<br> \n ";
    allMovies.forEach(movie => {
        resultElement.innerHTML += ` ${movie.title}, rating of ${movie.rating}, havewatched: ${movie.haveWatched} <br> \n`;
    })
    console.log("\n");
    resultElement.innerHTML += ` <br>You have ${allMovies.length} movies in total<br> \n`;
}
/*
let printMovies = () => {
    console.log("Printing all movies...");
    allMovies.forEach(movie => {
        console.log(`${movie.title}, rating of ${movie.rating}, havewatched: ${movie.haveWatched}`);
    })
    console.log("\n");
    console.log(`You have ${allMovies.length} movies in total`);
}
*/


//This function does the following:
//Display ONLY the movies having a rating higher than a specified value (passed as an argument) with no hardcoding
//Display out the total number of matches
let highRatings = (rating) => {
    let highRatedMovies = allMovies.filter(movie => movie.rating > rating);

    resultElement.innerHTML += `  printing movie that has a rating higher than ${rating} \n <br>`;
    highRatedMovies.forEach(movie => {
        resultElement.innerHTML += `  ${movie.title} has a rating of ${movie.rating} \n <br>`;
    })
    resultElement.innerHTML += "\n";
    resultElement.innerHTML += ` <br> In total, there are ${highRatedMovies.length} matches \n <br>`;

}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    resultElement.innerHTML += " changing the status of the movie... \n <br>";
    allMovies = allMovies.map(movie => {
        if(movie.title === title) {
            return {
                ...movie,
                haveWatched: !movie.haveWatched
            };
        }
        return movie;
    })

}






////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
resultElement.innerHTML += " ---------------- \n  ";
resultElement.innerHTML += " <br> running program...... \n <br>";
resultElement.innerHTML += " ---------------- \n <br>  ";
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
resultElement.innerHTML += " ---------------- \n <br> ";
addMovie(movie1);
resultElement.innerHTML += " ---------------- \n <br> ";



changeWatched("Spiderman");
/*replace console.log with display on web page*/
resultElement.innerHTML += "  ---------------- \n <br> ";

printMovies();

/*replace console.log with display on web page*/
resultElement.innerHTML += "  ---------------- \n <br>";

changeWatched("Spiderman");
/*replace console.log with display on web page*/
resultElement.innerHTML += "  ---------------- \n <br> ";

printMovies();
/*replace console.log with display on web page*/
resultElement.innerHTML += "  ---------------- \n <br>";

highRatings(3.5);


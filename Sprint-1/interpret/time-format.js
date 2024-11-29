const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program? 6

// b) How many function calls are there? 1

// c) Using documentation, explain what the expression movieLength % 60 represents
/*it means dividing 8784 by 60 and output the remainder value of this division. */


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/*It calculates the movie length in minutes */

// e) What do you think the variable result represents? Can you think of a better name for this variable?
/*it shows how long the movie is in hour/minute/seconds format like 2:34:44 . A better name is: totalMovieLength */

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

/*an easier code would be:
const movieLength = 8784;
const totalMovieLength = `${Math.floor(movieLength / 3600)}:${Math.floor((movieLength % 3600) / 60)}:${(movieLength%3600) % 60}`;

Or 
const movieLength = 8784;
const hour = Math.floor(movieLength/3600);
const minute = Math.floor((movieLength%3600)/60);
const second = (movieLength%3600)%60;
console.log(`movie length is ${hour}:${minute}:${second}`);
*/


const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);




// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
/*const movieLength = 8784;
const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;
const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;
const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;*/

// b) How many function calls are there?
/*There is 1 function call:
console.log(result);*/

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
/*The % operator returns the remainder after division.
movieLength % 60 gives the number of seconds remaining after converting
as many full minutes as possible from movieLength.*/

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/*It calculates the total number of complete minutes in the movie.
It removes the remaining seconds from movieLength and converts the result
from seconds into minutes by dividing by 60.*/

// e) What do you think the variable result represents? Can you think of a better name for this variable?
/*The variable represents the movie length formatted as hours:minutes:seconds.
A better name could be: formattedMovieLength*/

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
/*The code works correctly for positive whole numbers representing seconds.
However, it does not format values with leading zeros (e.g. 0:1:5 instead of 0:01:05),
and it may produce unexpected results for negative or decimal values of movieLength.*/

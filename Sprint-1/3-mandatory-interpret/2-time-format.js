const movieLength = 586.8650; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program? there are 6 variable declarations in this program: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result.

// b) How many function calls are there? there is 1 function call in this program: the console.log() function call on line 10.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//this expression returns the remainder of the division of movielength by 60. It is used to calculate the remaining seconds after converting the total movie length from seconds to minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean? it gives us the total number of minutes in the movie.

// e) What do you think the variable result represents? Can you think of a better name for this variable? it represents the total length of the movie in the format of hours:minutes:seconds. A better name for this variable could be movieDuration.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer it seems to work for all values of movieLength, as it calculates the total hours, minutes, and seconds based on the given movie length in seconds even when given floating point numbers. 

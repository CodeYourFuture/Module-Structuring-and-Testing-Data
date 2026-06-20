const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
/* 6 -  movieLength
remainingSeconds
totalMinutes
remainingMinutes
totalHours
result */

// b) How many function calls are there?
// 1, console.log() is the only function call in this program

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// % returns the remainder.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression assigned to totalMinutes is calculating the total number of minutes in the movie length 
// by subtracting the remaining seconds from the total movie length and then dividing that value by 60.
// This gives us the total number of whole minutes in the movie length.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the total length of the movie in hours, minutes, and seconds.
// A better name for this variable could be "movieDuration".

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code works for non-negative whole numbers. Negative or decimal values may produce incorrect or unexpected results.

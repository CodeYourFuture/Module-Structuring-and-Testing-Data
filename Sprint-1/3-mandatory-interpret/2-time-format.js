const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6.

// b) How many function calls are there?
//1 function call.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//Remainder assignment. Which means when 8784 seconds is divided by 60 it gives 146 with a remainder of 24.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//movieLength - remainingSeconds removes the leftover seconds that don’t make up a full minute.
//Dividing that by 60 converts the remaining seconds into whole minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//It represents movie duration. A better name can be formattedMovie.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Mostly yes, but not good for fractional values, negative numbers and numbers less than 0, the leading 0 may not be displayed.
const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in this program.
// b) How many function calls are there?
// There is 1 function call - console.log
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The % operator returns the remainder after one number is divided by another. In this expression, movieLength % 60 calculates the remaining seconds after converting the total movie length into whole minutes. Since there are 60 seconds in a minute, it gives the number of seconds left over.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression calculates the total number of complete minutes in the movie length by subtracting the remaining seconds and then dividing the remaining seconds by 60.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// movieDuration would be a better variable name
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// it works with a positive whole number but if your introduce decimal numbers or negative numbers the calculations will no longer work 
const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// A) 6

// b) How many function calls are there?
// A) 1 (console.log function)

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// A) This expression is using the modulo operator that finds the remainder of the movieLength after being divided by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// A) The expression is calculating the total number of minutes in the movie (not including the remaining seconds).

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// A) The variable gives the total length of the movie in hours, minutes, and seconds. A better name for this variable could be "formattedMovieLength".

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// A) The code would have an error if the user was to inputs a value with commas, letters or as a string.
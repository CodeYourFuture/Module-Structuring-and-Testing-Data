const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6

// b) How many function calls are there?
// 1

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// Remainder operator. It gives the number of seconds left after converting to full minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Line 4 takes the total seconds in the movie, removes the leftover seconds, and divides by 60 to get the total number of full minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// result represents the movie length written as hours:minutes:seconds. formattedMovieLength could be a better name for this variable.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// It works for most normal, positive whole numbers, but may not work well with negative or non-integer values.

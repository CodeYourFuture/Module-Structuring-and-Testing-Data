const movieLength = -5784; // length of movie in seconds

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
// % is the remainder operator in JavaScript. The expression represents the remainder after dividing
// movieLength by 60, in this case: 24.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The total length of the movie in minutes, after taking away the fractional part (the 24 seconds).

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The exact runtime of the movie, converted from seconds into hours, minutes and seconds format.
// One possible name for this variable: formattedMovieLength

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// It works with all positive values of movieLength. For negative values, it produces negative hours, minutes, and seconds.
// This is due to the fact that % is a remainder operator, not a true modulo operator. It always takes the sign of the divided.
// So if you divide a negative number, the remainder will be negative.

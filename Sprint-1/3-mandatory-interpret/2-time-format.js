const movieLength = 4758; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in this program. They are on lines 1, 3, 4, 6, 7, and 9.

// b) How many function calls are there?
// There are 1 function call in this program. It is on line 10.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// It represents the remainder when movieLength is divided by 60.
// This tells us how many seconds are left over after removing all the full minutes using the modulo operator.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// totalMinutes is the number of full minutes in the movie after removing the leftover seconds.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// It represents the final time format of the movie in hours, minutes, and seconds.
// A clearer name would be something like movieDuration.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// I tried running different numbers and it still works, even when the value is negative.
// The maths runs, but negative movie lengths don’t make real-world sense, so the output isn’t meaningful.

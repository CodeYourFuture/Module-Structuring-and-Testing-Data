const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// Answer; there are 6 variable declaration in lines, 1,3,4,6,7,9.

// b) How many function calls are there?
// there is one function call. console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// Answer: The % operator is the modulus operator, which returns the remainder when dividing two numbers.
// 8784 % 60 gives 24, meaning 24 seconds remain after dividing by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// movieLength - remainingSeconds removes the extra seconds, leaving only full minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The result variable represents the movie duration formatted as hours, minutes, and seconds and better name would be movieDuration.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code has some issues
// If movieLength is negative, the output won’t make sense.
// It doesn’t add a 0 for single-digit minutes or seconds for example 1:1:1 instead of 1:01:01.
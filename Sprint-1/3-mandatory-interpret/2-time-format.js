const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6 variable declarations: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result

// b) How many function calls are there?
// 1 function call: console.log

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression movieLength % 60 calculates the remainder when movieLength is divided by 60. This is used to determine how many seconds are left after accounting for the full minutes in the movie length. For example, if movieLength is 8784 seconds, then 8784 % 60 would give us the number of seconds that do not make up a full minute, which is 24 seconds in this case.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression (movieLength - remainingSeconds) / 60 calculates the total number of minutes in the movie length by subtracting the remaining seconds from the total seconds and then dividing by 60.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the formatted string of the movie length in hours, minutes, and seconds. A better name for this variable could be formattedMovieLength or movieLengthFormatted to make it more descriptive of its purpose.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// This code will work for all non-negative integer values of movieLength. However, if movieLength is negative, the calculations for remainingSeconds, totalMinutes, remainingMinutes, and totalHours may not produce meaningful results.

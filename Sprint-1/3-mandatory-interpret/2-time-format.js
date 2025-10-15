const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6 variable declarations
//Line 1: movieLength
//Line 3: remainingSeconds
//Line 4: totalMinutes
//Line 6: remainingMinutes
//Line 7: totalHours
//Line 9: result        

// b) How many function calls are there?
// 1 function call
//Line 10: console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The % operator is the remainder operator. It returns the remainder left over when one operand is divided by a second operand.
// In this case, movieLength % 60 calculates the number of seconds remaining after dividing the total movie length by 60 (the number of seconds in a minute).
// For example, if movieLength is 8784 seconds, then 8784 % 60 equals 24, meaning there are 24 seconds left over after accounting for full minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression (movieLength - remainingSeconds) / 60 calculates the total number of minutes in the movie by first removing the remaining seconds and then dividing by 60 (the number of seconds in a minute).

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the formatted string output of the total hours, remaining minutes, and remaining seconds of the movie.
// A better name for this variable could be formattedMovieLength.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code will work for all non-negative integer values of movieLength. It correctly calculates hours, minutes, and seconds for any length of time.
// However, if movieLength is negative or not an integer, the results may not make sense in the context of a movie length.
// For example, if movieLength is negative, the calculations for hours, minutes, and seconds will yield negative values, which are not valid for a movie duration.
// Additionally, if movieLength is a non-integer (e.g., a float), the calculations will still work, but the interpretation of the result may be less clear since movie lengths are typically represented as whole seconds.      
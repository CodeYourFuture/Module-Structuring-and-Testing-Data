const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6 -> movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result

// b) How many function calls are there?
// -> console.log() on the last line

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// % is the modulo (remainder) operator. movieLength % 60 gives the leftover seconds
// after dividing by 60. e.g. 8784 / 60 = 146 remainder 24, so remainingSeconds = 24

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// movieLength - remainingSeconds gives the total number of seconds that can be divided into whole minutes.
// Dividing this by 60 gives the total number of whole minutes in the movie. e.g. 8784 - 24 = 8760, 8760 / 60 = 146

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// result represents the movie length formatted as hours:minutes:seconds e.g. "2:26:24"
// A better name could be formattedMovieLength or totalFormattedMovieLength

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// It works for any positive whole number of seconds.
// It won't work correctly for negative values or decimals as % behaves unexpectedly with those.
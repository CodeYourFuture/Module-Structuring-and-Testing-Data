const movieLength = -8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// Answer to a) There are six variables in this program.
//
// b) How many function calls are there?
// Answer to b) I think there one function call in this program and it is "console.log".
//
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// Answer to c) The expression movieLength % 60 tels how many seconds will be left after
//  full minutes are extracted.
//
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Answer to d) The line four calculates how many full minutes are in the movie.
//
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Answer to e) The variable result represents the total length of the movie in hours, minutes and seconds.
//  A better name for this variable could be "formattedMovieLength".
//
// f) Try experimenting with different values of movieLength. Will this code work for all values of
//  movieLength?Explain your answer
// Answer to f) This code will work with all values, however giving it a negative value will produce
//  negative results.

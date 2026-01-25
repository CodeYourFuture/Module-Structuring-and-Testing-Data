const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6 variable declarations.

// b) How many function calls are there?
// 0 function calls.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression returns the remainder left over when movieLength is divided by 60. In this case.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression on line 4 calculates the length of the movie in minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Result represents the movie length formatted as hours:minutes:seconds. A better name could be
// formattedMovieLength.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// As long as movieLength is a non-negative integer representing seconds, the code will work.

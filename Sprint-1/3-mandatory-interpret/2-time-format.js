const movieLength = -3500; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// Ans: There are 6 variable declaration: Line 1, Line 3, Line 4, Line 6, Line 7, Line 9,

// b) How many function calls are there?

// Ans:  There is one function call ... log()

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// Ans: The expression movieLength % 60  returns the remainder after totalMinutes is divided by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// The expression is calculating how many full minutes are in the movie’s total length by removing leftover seconds(less than 60)

// e) What do you think the variable result represents? Can you think of a better name for this variable?

//   Ans: the variable result represent total movie lenght, Movie duration_hr_min_sec would be better name.

// In a "camel case" the following options would be better names
// 1. movieDurationHrMinSec 
// 2. totalMovieSpan
// 3. totalMoviePeriod

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// Ans: I have tried with different values and it seems to work for all values, but it needs to validate to avoid entering negative values 
// I inserted --3500 and returned 0: -58: -20  which does not mean real time representation.


// Corrected typo reminder -----> remainder
// Suggested better names in "camel case" a convention in Javascript

// corrected name suggestion according to camelCase

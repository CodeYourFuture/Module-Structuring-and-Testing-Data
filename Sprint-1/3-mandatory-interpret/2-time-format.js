const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
/**
 * There are six variable declarations
 */

// b) How many function calls are there?
/**
 * There is only one function call console.log()
 */

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
/**
 * It represents the remainder when movieLength is divided by 60 to extract the seconds from a total number of seconds.
 */

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/**
 * 1. This line calculates the total number of whole minutes in the movie by subtracting the remainder seconds from the total seconds and giving the number of seconds that cna be evenly divided into minutes (a multiple of 60) - movieLength - remainingSeconds
 * 2. Then divides that result by 60 to convert from seconds to minutes - / 60
 */

// e) What do you think the variable result represents? Can you think of a better name for this variable?
/**
 * result is too vague and tells us almost nothing.
 * Better name can be: 
 * timeDisplay - shows it's meant to display time
 * movieDuration - relates what is being calculated.
 */

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
/**
 * No leading zeros for single digits:
 *
 * Current output: "2:5:7" for 2 hours, 5 minutes, 7 seconds
 * Standard time format expects: "02:05:07"
 * 
 * No validation for invalid inputs:
 * 
 * movieLength = -30;    // "-0:-0:-30" (doesn't make sense)
 * movieLength = 60.5;   // "0:1:0.5" (shows decimal seconds)
 * movieLength = "abc";  // NaN:NaN:NaN (it breaks completely)
 */

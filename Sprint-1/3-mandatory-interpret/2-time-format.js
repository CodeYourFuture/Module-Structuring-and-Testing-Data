const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There is 6 variable declarations in this program. 

// b) How many function calls are there?
// There is 1 function call. console.log();

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// This means divide movieLength  by 60 and return what is left over.


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Subtract the leftover seconds and divide by 60 so this calculates the total number of full minutes in the movie.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// This builds a formatted string that looks like hours:minutes:seconds so the movie duration converted in time format (HH:MM:SS)
// Result is quite vague a better variable name could be formattedTime 

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// This works for positive whole numbers and any length in seconds.
// It doesn't work handling negative numbers properly.

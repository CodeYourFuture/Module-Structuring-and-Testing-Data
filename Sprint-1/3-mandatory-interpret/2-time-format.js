const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//6 variable declarations. 

// b) How many function calls are there?
//1 function call, on line 10. 

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//The remainder operator returns the remainder left over when movieLength is divided by 60. 

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression (movieLength - remainingSeconds) / 60 calculates the total number of whole minutes in the movie length. It first subtracts the remaining seconds from the total movie length to get a value that is a multiple of 60, and then divides that value by 60 to convert it from seconds to minutes. It gives it as a whole number and is easier to work with. 

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// It represents the movie duration in the format of hours:minutes:seconds. A better name for this variable could be movieDuration. 

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// It does not work for negative values. The code assumes that movieLength is a positive integer representing the length of a movie in seconds. If movieLength is negative, the calculations for remainingSeconds, totalMinutes, remainingMinutes, and totalHours will not produce meaningful results, and the final result will not represent a valid time format. 
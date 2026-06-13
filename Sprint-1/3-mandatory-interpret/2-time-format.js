const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
There are 6 variable declarations in this program. The variables declared are:
1. movieLength

// b) How many function calls are there?
There is 1 function call in this program. The function called is:
1. console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// The expression movieLength % 60 represents the remainder when movieLength is divided by 60. This gives us the number of seconds that are left over after converting the total seconds into minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression assigned to totalMinutes represents the total number of minutes in the movie, excluding the remaining seconds.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the formatted time string in the format "hours:minutes:seconds".
// A better name for this variable could be formattedTime.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//The code will work for all non-negative integer values of movieLength. 
//It assumes that the input will always be a valid number of seconds. 
//If the input is negative or not a number, the results will be unexpected.
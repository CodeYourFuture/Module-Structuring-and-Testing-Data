const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//there are 5 variable declaration in this program. 
// b) How many function calls are there?
//there are no function calls in this program.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//its modulo operation ,its reterun the reminder of division.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//the total number of minutes in the movie, excluding the remaining seconds.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
//movieDurationString 
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//this code will work for non-negetive integer value of movielength.
const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//We have six variable declarations Line 1,3,4,6,7,9. 

// b) How many function calls are there?
// We have one function call which is the console.log(result).

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//The expression movie length % 60 in line 6 represents to  a modulus operation, 
//which calculates the remainder when dividing movieLength by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//In line 4 Movie length  represents the total length of the movie in seconds,remainingSeconds represents 
// the remaining seconds that do not form a complete minute, and dividing by 60 converts the number of 
// seconds into minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the result and it is logged to the console so that we can see the  formatted time,
// A better name would be "movie duration time" or "movie length".

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
const movieLength = 7220; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

//It works with my new movie length declaration the result comes as 2:0:20 two hours and 20 seconds.
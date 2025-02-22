const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// there are 6 variable declaration in this program

// b) How many function calls are there?
// there are 2 function calls on lines 3 and 6

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// this expression evaluate to the remainder when movielength is divided by 60; this is essentially the remaining seconds.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//this used to determine the total number of full minuties with out the remaining seconds. 

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// the variable result present the movie length in hours:minutes:second format. a better name for it movieLengthInTime.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// this code will work for all values of movieLength as long as they are numbers.

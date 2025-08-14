const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// Answer: there is only 5 variable declaration.

// b) How many function calls are there?
// Answer: only one function call console.log()

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// Answer: Movie length calculate the remaining seconds after dividing by 60
8784 % 60 = 146, leaving reminder of 24.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Answer: totalMinutes we remove movieLength and remainingSeconds and then divide by 60.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//Answer: this represent a format time string

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// this code works, but it does not work for negative value or decimal function.
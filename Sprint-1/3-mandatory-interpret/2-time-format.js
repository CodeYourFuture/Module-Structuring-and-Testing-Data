const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6

// b) How many function calls are there?
// 1

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// It divides movieLength by 60 and returns the remainder. This gets the remaining seconds after converting movie length to minutes

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It converts remaining movie length from minutes into hours.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the formatted time in hours, minutes, and seconds. A better name is formattedTime.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//  Yes, it will work for all cases except for negative values - the calculation would not make sense.
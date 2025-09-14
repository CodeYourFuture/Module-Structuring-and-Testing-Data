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

// It gives the remainder left over when one number is divided by another

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// Its subtracts the remainder from the movieLength so that it can be divided into a whole number

// (movieLength - remainingSeconds) / 60
// 8760 / 60 = 146

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// The variable represents the movie length in seconds converted to a (HH:MM:SS) format
// A better variable name would be 'formattedTime'

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// No, this code will not work for all values of movieLength
// In edge cases where movieLength is assigned a value of a negative number or string, the output will not make sense

const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6 variables (movieLength, remainingSeconds ,totalMinutes ,remainingMinutes, totalHours, result)

// b) How many function calls are there?
// Only one (console.log)

// c) Using documentation, explain what the expression movieLength % 60 represents
// The remainder operator (%) returns the remainder leftover when one operand is divided by a second operand.
//So, movieLength % 60 calculates the number of seconds remaining after dividing movieLength by 60
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The line subtract the remainingMinutes from movieLength the it divides by 60 to get the total minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//The result variable represent the length of the movie in hours , minutes and seconds . I think  movieTimeFormatted will be better.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// It will work for all positive integers not negative and for 0 the output will be 0:0:0

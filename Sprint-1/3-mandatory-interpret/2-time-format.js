const movieLength = -4382.3817; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//This program has 6 variable declarations:
//const movieLength = 8784;
//const remainingSeconds = movieLength % 60;
//const totalMinutes = (movieLength - remainingSeconds) / 60;
//const remainingMinutes = totalMinutes % 60;
//const totalHours = (totalMinutes - remainingMinutes) / 60;
//const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;

// b) How many function calls are there?
// There is 1 function call within this program
//1) console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The modulus operator returns the remainder after dividing movieLength by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// remainingSeconds removes leftover seconds 
// movieLength - remainingSeconds leave only full seconds
// Dividing by 60 converts secods to minutes 
// This expression converts the total movie length from seconds into whole minutes, excluding any leftover second. 

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the formatted movie duration into hours, minutres and seconds. 
// A better variable name may be: movieDuration

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Upon experimenting with the const movieLength I have tested edge cases. The code works well for positive integer values.
// Handling edge cases such as negative value, floats lead to confusing results.
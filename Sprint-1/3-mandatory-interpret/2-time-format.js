const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// - 5 declarations
// b) How many function calls are there?
//  - One function called
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//  - it represents remainder left over after division by 60
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//  - Here number of full minutes of the movie length is calculated
// e) What do you think the variable result represents? Can you think of a better name for this variable?
//  - It is length of the movie with hours, minutes and seconds format
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//  - Code will work with different movieLength, just will show different result.
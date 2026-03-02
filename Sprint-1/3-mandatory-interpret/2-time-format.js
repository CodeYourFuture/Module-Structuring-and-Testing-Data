const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There is 6 Variable declarations
// Line 1 , Line 3 , Line 4 , Line 6 , Line 7 , Line 9

// b) How many function calls are there?
// There is 1 function call in Line 10

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression movieLength % 60 represents the remainder of the division of movieLength by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Line 4 removes the leftover seconds, then devides by 60.
// then divides the result by 60 to calculate the total full minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Result is a formatted time string in hours, minutes and seconds. A better name for this varible could be formattedTime.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// I tested diffrent positive numbers and the code work correctly.
// However it well work properly for positive numbers.
// If movielength is negative or a decimal number , the output may not repeesent the time correctly.

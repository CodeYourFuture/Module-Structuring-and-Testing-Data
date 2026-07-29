const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in this program: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result.

// b) How many function calls are there?
// There are 5 function calls in this program: On lines 3,4 6,7 and 9.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//movie % 60 represents the remainder of the division of movieLength by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression is an Assignment operator that assigns its right hand side value and equation to the variable on the left hand side.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the total hours,minutes and seconds of the movie. A better name for this could be runtime or duration.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// This code will not work for values of movieLength that are less than 60 seconds due to it needing to divide by 60 to get minutes and hours.

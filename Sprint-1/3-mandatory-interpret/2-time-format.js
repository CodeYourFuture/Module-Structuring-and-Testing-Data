const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(totalMinutes);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6

// b) How many function calls are there?
// 1 

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The % operator (modulo) returns the remainder of a division. 
// In this case, it returns how many seconds are left after dividing the total seconds by 60.
// For example, 8784 % 60 = 24 — so 24 seconds remain.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// we are calculating the total minutes. 
// we subtract movieLength by remainingSeconds because remaining seconds don't add up to a full min.
// convert to minute by dividing by 60.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable `result` represents the movie's length in a time format: `HH:MM:SS`. 
// string format 

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes, the code works for all non-negative values of `movieLength`, including 0.
// However, for values less than 60, it will return 0 hours and 0 minutes
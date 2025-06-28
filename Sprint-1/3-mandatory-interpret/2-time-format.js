const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//There are 6 variable declarations: movieLength, remainingSecond, totalMinutes, remainingMinutes, totalHours, result

// b) How many function calls are there?
// There is one function call: console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// This expression calculates the remainder after dividing by 60
// This gives the number of seconds left over after removing the full minutes.
//  8784 % 60 = 24, meaning 8784 seconds is 146 full minutes and 24 seconds.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression in line 4 means totalMinutes = (8784 - 24) / 60

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the movie length in hours : minutes: seconds
//A better name for this variable would be: formattedDuration

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// I tested the code with values like 1, 45, 75, 1800, and 10000. The results were accurate for all of them.
// For example, 75 returned 0:1:15, and 1800 returned 0:30:0, which are correct.
// I also tried using -5000, and the output was -1:-23:-20, which doesn’t make sense for a time format.
// This shows the code does not handle negative numbers correctly.
// In general, it works well with positive whole numbers
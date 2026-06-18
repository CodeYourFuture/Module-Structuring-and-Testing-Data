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
// There is 1 function call in this program: console.log(result).

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The % operator is the remainder operator.
// It returns the remainder left over after one number is divided by another number.
// MovieLength % 60 finds the remaining seconds after dividing the total movie length by 60.
// This is used to calculate how many seconds are left after converting the total seconds into minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Take away the leftover seconds, then convert the rest into minutes.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The movie length displayed as hours:minutes:seconds.
// A better name for this variable could be movieDuration.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes, it works for all movie lengths except for negative and text values.

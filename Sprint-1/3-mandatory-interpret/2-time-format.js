const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

// Rename result to formattedTime for clarity

const formattedTime = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(formattedTime);

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// There are 6 variable declarations:
// movieLength, [line 1]
// remainingSeconds, [line 3]
// totalMinutes, [line 4]
// remainingMinutes, [line 6]
// totalHours, [line 7]
// result. [line 9]

// b) How many function calls are there?

// There is 1 function call:
// console.log() [line 9]

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// The % operator is the remainder operator.
// movieLength % 60 gives the remainder after dividing movieLength by 60,
// which represents the leftover seconds after counting full minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// totalMinutes calculates how many whole minutes are in movieLength by
// subtracting leftover seconds and dividing the remainder by 60.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// Result is the movie length formatted as "hours:minutes:seconds".
// A better name could be formattedTime.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// 1. The code correctly converts movieLength into hours, minutes, and seconds for positive values.
// 2. It doesn’t handle zero or negative values properly—these cases need extra checks.
// 3. Minutes and seconds may appear without leading zeros.
// 4. To improve add validation to handle zero or negative inputs gracefully.


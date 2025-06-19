const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// --- Answers to the questions ---

// a) How many variable declarations are there in this program?
// There are 6 variable declarations:
// movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result

// b) How many function calls are there?
// There is 1 function call:
// console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// The `%` operator is the modulo operator, which returns the remainder after division.
// So movieLength % 60 gives the remainder when movieLength is divided by 60.
// This means it calculates the leftover seconds after counting full minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Line 4: (movieLength - remainingSeconds) / 60
// This subtracts the leftover seconds from the total seconds,
// giving a multiple of 60 seconds (full minutes),
// then divides by 60 to convert seconds to total minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// result holds the formatted string showing the movie length in "hours:minutes:seconds" format.
// A better name might be `formattedTime` or `movieDurationFormatted`.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// For positive integers, the code works correctly.
// For zero, it returns "0:0:0", which is fine.
// For negative numbers, the calculation may produce unexpected negative values.
// For very large values, it still works fine.
// The code assumes movieLength is an integer number of seconds.
// If movieLength is a non-integer or not a number, the code might not behave as expected.


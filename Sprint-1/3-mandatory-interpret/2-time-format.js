const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// Answer: 6

// b) How many function calls are there?
// Answer: 1 (console.log(result))

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// Answer: It returns the remainder after movieLength is divided by 60.
// This gives the number of seconds left over after converting to minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Answer: It subtracts the remaining seconds from the total seconds,
// then divides by 60 to calculate the total whole minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Answer: It represents the movie duration in hours:minutes:seconds.
// A better name could be formattedTime or movieDuration.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Answer: It works for most values, but it does not always display
// the time in the standard format because single-digit minutes or
// seconds are not padded with a leading zero (for example, 5 instead of 05).

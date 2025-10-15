const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in this program on lines 1, 3, 4, 6, 7, 9.

// b) How many function calls are there?
// 1: console.log() on line 10.

// c) Using documentation, explain what the expression movieLength % 60 represents
// The remainder (%) operator returns the remainder left over when one operand (dividend) is divided by a second operand (divisor). 
// It always takes the sign (+/-) of the dividend (the first number).
// So the movie length in seconds is divided by 60 (the number of seconds in a minute).
// The remainder is the number of seconds left over after all the full minutes have been accounted for.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It subtracts the remaining seconds from total movie length to get the total length in seconds that can be evenly divided by 60.
// Then divides by 60 to convert the length from seconds to minutes.
// So totalMinutes represents the total number of full 60-second minutes in the movie.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the total length of the movie in hours, minutes and seconds.
// A better name for this variable could be movieDuration or movieFormattedLength.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code will work for all positive integer values of movieLength formatting to H:MM:SS
// It will also work for 0, returning 0:0:0
// It will incorrectly format negative numbers and very small number like < 60 seconds.
// Single digit minutes and seconds will not be zero-padded to two digits e.g. String(remainingMinutes).padStart(2, "0")

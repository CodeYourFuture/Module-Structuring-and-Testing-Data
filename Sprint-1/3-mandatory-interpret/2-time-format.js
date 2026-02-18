const movieLength = true; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// There are 6 variable declarations in this program.

// b) How many function calls are there?

// There is 1 function call in this program.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// The expression movieLength % 60 is using the modulus operator (%) to calculate the remainder when movieLength is divided by 60.
// In this context, it is calculating the number of seconds that are left over after accounting for the full minutes in the movie length.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean

// It calculates the total number of minutes in the movie by first subtracting the remaining seconds from the total movie length (in seconds)
// and then dividing the result by 60 (the number of seconds in a minute). This gives us the total number of full minutes in the movie length.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// The variable result has the value of a template literal that combines the total hours, remaining minutes, and remaining seconds
// into a string format that represents the length of the movie in hours, minutes, and seconds separated by colons.
// A better name for this variable could be "formattedMovieLength"
// to more clearly indicate that it represents the movie length formatted as hours, minutes, and seconds.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// Test 1: movieLength = 1
// Expected output: 0:0:1
// Actual output: 0:0:1

// Test 2: movieLength = -1
// Expected output: 0:0:-1
// Actual output: 0:0:-1

// Test 3: movieLength = "3,600"
// Expected output: type error
// Actual output: NaN:NaN:NaN

// Test 4: movieLength = true
// Expected output: 0:0:1
// Actual output: 0:0:1

// The code will work for all values of movieLength that are of type number or can be coerced to a number (like true which is coerced to 1).
// This is because arithmetic operation need to be performed on movieLength, and if it is not a number or cannot be coerced to a number,
// It will result in NaN (Not a Number) for the calculations of totalMinutes, remainingMinutes, totalHours, and ultimately the result variable.

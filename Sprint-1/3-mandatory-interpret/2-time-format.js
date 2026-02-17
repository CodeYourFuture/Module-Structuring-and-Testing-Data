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
// There is 1 function call in this program: console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression `movieLength % 60` calculates the remainder when `movieLength` is divided by 60. This is used to determine the number of seconds that are left after accounting for the full minutes in the movie length. For example, if `movieLength` is 8784 seconds, then `movieLength % 60` would give us the remaining seconds after converting as many full minutes as possible from the total seconds.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression assigned to `totalMinutes` is calculating the total number of full minutes in the movie length. It does this by first subtracting the `remainingSeconds` from `movieLength`, which gives us the total number of seconds that can be fully converted into minutes. Then, it divides that result by 60 to convert those seconds into minutes. For example, if `movieLength` is 8784 seconds and `remainingSeconds` is 24 seconds, then `totalMinutes` would be calculated as (8784 - 24) / 60, which equals 145 minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable `result` represents the formatted time in hours, minutes, and seconds. A better name for this variable could be `formattedTime`.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// This code will work for all non-negative integer values of `movieLength`. It correctly calculates the hours, minutes, and seconds for any given length of time in seconds. However, if `movieLength` is negative, the calculations would not make sense in the context of a movie length, and the output would be incorrect. Therefore, it is important to ensure that `movieLength` is a non-negative integer for this code to function properly.
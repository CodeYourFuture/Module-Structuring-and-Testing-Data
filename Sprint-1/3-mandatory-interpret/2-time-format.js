const movieLength = 8468; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result.

// b) How many function calls are there?
// 1 function call: console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// This expression calculates the remainder or modulo when movieLength (in seconds) is divided by 60. This gives the number of seconds remaining after converting the total seconds into full minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It means the total number of full minutes in the movie length. It subtracts the remaining seconds from the total movie length and then divides that value by 60 to convert it from seconds to minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// It represents the formatted string of the movie length in hours, minutes and seconds. A better name could be formattedMovieTime or durationMovieFormatted.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//Code works correctly, but there are few edge cases to consider:
// 1. If movieLength is negative, the output won't make sense in the context of time duration.
// 2. If movieLength is a very large number the output'll still be correct, but not readable - "1.7968563299644136e+35:4:52"
// 3. If movieLength is zero, the output will be "0:0:0", which is valid but may not be the desired format for representing zero duration.
// 4. If movieLength is not an integer like floating-point number, the calculations may yield unexpected results - "2:21:8.299999999999272" since time is typically represented in whole seconds.
// 5. When hours, minutes or seconds are single digits (1:5:3) the output may not be in the desired format with 2digits - "01:05:03".

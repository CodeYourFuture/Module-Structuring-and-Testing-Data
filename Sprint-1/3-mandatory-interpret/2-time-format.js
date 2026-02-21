const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// Answer: There are 6 variable declarations. (They are: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result).
// b) How many function calls are there?
// Answer: There is exactly 1 function call (console.log on line 10).
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// Answer: The `%` symbol is the remainder (modulo) operator. `movieLength % 60` calculates the leftover seconds that do not fit into a full 60-second minute.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Answer: It subtracts the leftover seconds from the total seconds to get a number cleanly divisible by 60, then divides by 60 to find out exactly how many full minutes are in the movie.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Answer: `result` represents the final formatted time string (Hours:Minutes:Seconds). A better, more descriptive name could be `formattedTime` or `movieDurationString`.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Answer: It works for positive whole numbers. However, it won't format single-digit numbers perfectly (e.g., it prints 2:5:9 instead of 02:05:09). Also, it might produce weird results or decimals if we input negative numbers or fractional seconds.
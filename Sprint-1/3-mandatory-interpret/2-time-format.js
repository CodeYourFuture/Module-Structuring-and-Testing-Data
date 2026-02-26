const movieLength = 9; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${String(remainingMinutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6

// b) How many function calls are there?
// 1

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//Remainder operator.
//The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. 
// It always takes the sign of the dividend.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The value stored in totalMinute is calculating the number of minutes that have elapsed in the movie by subtracting the remaining time from the total duration and converting seconds to minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//The variable result represents a formatted time string in the format HH:MM:SS. 
// A better name would be "movieDurationDisplay", as these names more clearly describe the purpose and content of the variable.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// No. Not for all possible values of movieLength, some EdgeCases are: 
//1. when movieLength is of negative value, the maths produces negative time and its illogical for a movie duration
//2. if movieLength is not a number, its produces "NAN" and this breaks mathematically
//3. what if movieLength is less than 10? if movieLength is let say 9 , without proper formatting it will look like this 0:0:9 but with 0 padding it looks better like this 0:00:09
const movieLength = 15560; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// there are 6 variable declarations - remainingSeconds, totalMinutes, remainingMinutes, 
// totalHours, result and movieLength

// b) How many function calls are there?
// there is 1 function call - console.log is called on the last line to print the result to the console

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// It is counting the remaining seconds after all the full minutes have been taken out of the movie length.
// For example if the movie length is 125 seconds, then 125 % 60 would give us 5 seconds remaining after taking out the full minutes (2 minutes in this case).

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression (movieLength - remainingSeconds) / 60 calculates the total number of minutes in the movie length.
// It subtracts the remaining seconds from the total seconds and then divides by 60 to get the total minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// result gives the length of the movie in hours, minutes and seonds
// a better name may be movieLengthFormatted or something similar

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes, this code will work for all values of movieLength 
//%60 gives the remainder and the remainder is always taken away before dividing for minutes and hours 
// so it will always give the correct number of hours, minutes and seconds regardless of the length of 
// the movie in seconds.
const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in this program

// b) How many function calls are there?
// There is 1 function call

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// % 60 is a remainder operator which in this case divides the total by 60 and shares the remainder (seconds / minutes)
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression assigned to total minutes is the difference of the total movie time in seconds less the remainder of the seconds divided by 60 which gives the total length of the movie in minutes
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the time of the movie in Hours Mintutes and seconds. We could use time instead of result
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes. This code will work for all values of movie length. I tried with 8400 seconds and 8405 seconds
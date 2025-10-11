const movieLength = 348769045688; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program? there are 6 variable declarations

// b) How many function calls are there? 1 function call (console.log).

// c) Using documentation, explain what the expression movieLength % 60 represents it returns the remainder from dividing movieLength by 60.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean? it gives us the total whole minutes we have left after removing the remaining seconds from movieLength and dividing by 60.

// e) What do you think the variable result represents? it represents the total time of the movie in hours, minutes and seconds.
// Can you think of a better name for this variable? movieLengthFormat

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? I think it will work for all positive value of movieLength.
//  Explain your answer this is because the code is calculating the time format based on seconds, minutes and hours which are all positive values.

const movieLength = 60; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations.

// b) How many function calls are there?
// one function call in the program, which is console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//modulo operator returns left over after division. the expession movieLength % 60 returns the
// remaining seconds after dividing the movieLength by 60. In this case, it returns 24, which is the remaining seconds after dividing 8784 by 60.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// the expression covert the movieLength from seconds to minutes.
// it subtracts the remaining seconds from the movieLength and divides the result by 60 to get the total minutes. In this case, it returns 146, which is the total minutes of the movie length.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// the total length of movie in hours,minutes and seconds.
// a better name movieLengthHMS would be more clear.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// No, it will not work for all values of movieLength.
// if movieLength is above 24 hours, the code will create an incorrect format of hours.
// example 52:26:24 which don't make sense.
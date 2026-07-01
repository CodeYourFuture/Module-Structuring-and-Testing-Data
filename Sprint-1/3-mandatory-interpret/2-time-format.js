const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// a) How many variable declarations are there in this program?
//6
// b) How many function calls are there?
//1
// c) Using documentation, explain what the expression movieLength % 60 represents it represents the remainder when movielength is divided by 60
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//The expression assigned to totalMinutes means that the remaining seconds are subtracted from the movieLength and then divided by 60 to get the total number of minutes in the movie length.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//The variable result represents the total time of the movie, in hours minutes and seconds. A better name for this variable could be totaltime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//Yes it would work, we have accommodated for all length
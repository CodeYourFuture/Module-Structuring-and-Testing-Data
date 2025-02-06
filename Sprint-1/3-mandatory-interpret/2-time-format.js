const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;
const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//  ans:There are 6 variable declaration which are const.

// b) How many function calls are there?
//ans: There is only 1 function call which is console.log().

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//ans: This is called remainder operator which divide the length of movie 8784 by 60 and place the remaining second which is 24.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// ans: It means movie length subtract the remaining seconds and use remainder operator like (8784-24=8760/60) which 146.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// ans I think its define time of the movie length in hour, minute, and second. Better name for this variable will be "timeString".

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
 
const movieLength = 2080; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;
const timeString = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(timeString);
// It does work with another value as i change the movie length, it does work.
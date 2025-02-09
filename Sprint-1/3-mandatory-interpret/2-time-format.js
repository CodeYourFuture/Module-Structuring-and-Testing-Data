const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//6 variable declaration, all of the lines which starts with const.

// b) How many function calls are there? 
//only one function call which is console.log.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// % is a "Remainder operator"

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It calculates according to minutes. Initially it takes movie length in seconds and reduces it from remaining seconds, then the answer will be divided to 60 which shows the length of the movie in minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//It shows the duration of the movie in HH:MM:SS. A better name could be "MovieDuration" or "MovieLength".

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//Yes, the code works for all length of movies from 0 and more. It converts any movie length to HH:MM:SS format.
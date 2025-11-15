const movieLength = 1237401; // length of movie in seconds

const remainingSeconds = movieLength % 60;

const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const timeInHhMmSs = `${totalHours
  .toString()
  .padStart(2, "0")}:${remainingMinutes
  .toString()
  .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
console.log(timeInHhMmSs);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
   //6 variable declarations

// b) How many function calls are there?
   //1 function call

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
   //% it's the remainder operator and it tells us how many seconds are left out of a whole minute

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
   //total time in minutes without the remaining seconds

// e) What do you think the variable result represents? Can you think of a better name for this variable?
   //it represents the total movie time , so.... const timeInHhMmSs perhaps

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
   //it will work with all values as long as they are numbers,

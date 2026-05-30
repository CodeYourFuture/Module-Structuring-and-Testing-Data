const movieLength = 10000; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6

// b) How many function calls are there?
// 1

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// it divides the number by 60 so we know how many seconds are remaining by using the modulo operator

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// this is to convert seconds into minutes without losing any seconds becuase we keep them in remainingSecondds

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// This represents how many hours, minutes and seconds left in the movie. formattedTime.
//

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//  Yeah I think this will work for different inputs, becuase we are using modulo so we're not losing any seconds when dividing

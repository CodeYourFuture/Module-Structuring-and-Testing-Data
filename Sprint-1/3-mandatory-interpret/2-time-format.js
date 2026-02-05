const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// a) 6

// b) How many function calls are there?
// b) 1

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// c) This expression shows the remaining part after dividing one number by another. 
//    This way we find out how many seconds are not enough to make up a full minute.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// d) This way, we find out how many full minutes the film lasts. 

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// e) This variable stores information about the exact length of the film (hours:minutes:seconds). I would call it “hoursMinutesSeconds”

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// f) I tried several values where the length of the film is 0 or only a few minutes/seconds, etc. The code works in all the cases I tried and returns 0 as the result if the film, for example, is less than an hour long. 
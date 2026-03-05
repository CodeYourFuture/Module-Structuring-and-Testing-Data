const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// there are 6 variable declaration.

// b) How many function calls are there?
// there is only one function call.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
/* the expression movieLength % 60 represents the returns of the remainder after dividing one number by another 
   in this case 8784 % 60 and it return the remainder 24. */

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//This expression calculates the total full minutes in the movie by removing leftover seconds and converting seconds to minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//result represent the total movie length using hours,minutes and seconds,the better name can be movieRunTime.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
/*the code works for different values of movieLength it present the input movieLength by calculating the remainder and subtracting 
it with the initial input and using the method for the finding of the value for the rest of the variables and assign the values withe 
the variables of hours,minutes and seconds */

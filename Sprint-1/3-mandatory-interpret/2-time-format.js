const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

/*  

a)variables declarations

1. There are 6 variable declarations 

b) Function calls

There is only 1 function call

console.log(result);

c)Using documentation, explain what the expression movieLength % 60 represents

According to the JavaScript documentation, the remainder (%) operator returns the remainder left over after one number is divided by another. 

So movieLength % 60  means Divide movieLength by 60 and return the remainder.

d) Interpret line 4. What does the expression assigned to totalMinutes mean?

It means remove the leftover seconds from the total movie length, then divide by 60 to calculate the total number of whole minutes.


e) What do you think the variable result represents? Can you think of a better name?

It stores the movie length formatted as hours:minutes:seconds

A better variable name could be formattedTime


f) Try experimenting with different values of movieLength.

It works correctly for positive whole numbers (integers) representing seconds. However, there are some cases where it doesn't produce ideal results like:

const movieLength = -100;

*/
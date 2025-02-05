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
a) There are 6 variables declared in this program.

b) There is just 1 function call which is console.log(result). which print values of result variable.

c) % is a modulus operator which return a remainder of division.so const remainingSeconds = movieLength % 60; -> 8784 % 60 = 24 seconds
   will be the value.

d) const totalMinutes = (movieLength - remainingSeconds) / 60; means const totalMinutes = (8784- 24) / 60; its first resolve brackets so 
   const totalMinutes = (8760) / 60; -> const totalMinutes = 146 full minute it will return and remove remaining seconds.

e) it will format the time in hours:minutes:seconds . Better name can be calculatedTime.

f) i tried to change the value of movie length and every time getting different results and code is working.
*/
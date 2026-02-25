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
// One function call

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The % operator checks the remainder of that expression when being evaluated. It is similar to the remainder theorem in mathematics.
// if it returns 0, even, if it returns value other than zero, it odd. it is mostly used for checks in programming

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The total time for this movie is 8760 second and fractional 24 seconds, line 4 is used to deduct the fractional 24 seconds
// Then convert the whole number seconds to minute.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// the variable result represent total movie duration in hours,minute and seconds.
// const=movieLength

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// this code works for all movie length and integer values.
// for movie length which are multiples of 60 it returns hours with 0 minutes and 0 seconds

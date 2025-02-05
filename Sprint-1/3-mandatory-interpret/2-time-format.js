const movieLength = 90065; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// Six variable declarations 

// b) How many function calls are there?
//One function call on line 10

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression provides the remainder when movieLength is divided to 60

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Total number of minutes in a movie.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the duration of a movie in hours, minutes and seconds.
// movieDuration

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// If movieLength is greater the number of seconds in 24h the result would still be in h:m:s
// variable day can be implemented
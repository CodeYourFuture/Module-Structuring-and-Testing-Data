// const movieLength = 8784; // length of movie in seconds
const movieLength = 879094; // length of movie in seconds

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
// % is the modulos operator, movieLength % 60 gives us the remainder, essentially we divide 60 by movieLenght and return the remainder

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/* we are subtracting remainingSeconds from movieLength,  remainingSeconds is a variable that holds the result from totalMinutes % 60,
the expression in brackets will evaluate first and then the result divided by 60.
*/

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//runTime
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
/* I have experimented with different values by changing the movieLength variable, and they all work, it works because we have
didn't hardcode our expressions and used variables.
*/


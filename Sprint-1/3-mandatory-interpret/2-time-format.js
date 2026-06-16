const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//1.movieLength
//2.remainingSeconds
//3.totalMinutes
//4.remainingMinutes
//5.totalHours
//6.result

// b) How many function calls are there?
//1. Line 10: console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

//The % symbol is called the modulus operator. It returns the remainder of a division operation.
// In this case, movieLength % 60 calculates the remaining seconds after dividing the total movie length by 60 (the number of seconds in a minute).
// This gives us the number of seconds that do not make up a full minute in the movie length.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression (movieLength - remainingSeconds) / 60 calculates the total number of minutes in the movie by subtracting the remaining seconds from the total seconds
// and then dividing by 60.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the formatted time of the movie in hours, minutes, and seconds. A better name for this variable could be movieDuration.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//It will do the math perfectly for most normal positive numbers, but there are a few situations where the code will act wierdly.
//1. Visual problems
//2. Negative numbers
//3.Decimal numbers

const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// -6

// b) How many function calls are there?
// - 1  ===> console.log()

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// It returns the remainder when movieLength is divided by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//In line 4, we remove the leftover seconds from the total time and divide by 60 to convert the movie length into full minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// convertedTime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//The code works with all values, but it doesn't make much sense when a negative number is entered.
// To improve the code, a check can be added to prevent negative values from being used.

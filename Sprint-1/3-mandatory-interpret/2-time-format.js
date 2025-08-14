const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// there are 6 variable declarations.  

// b) How many function calls are there?
// there are 8 calls.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression movieLength % 60 represents the remainder when movieLength (the length of the movie in seconds) is divided by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// it calculates the minutes and uses the movieLength and remainingSeconds to calculate.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// It assign the value in result as the total hours, Remaining Minutes and Remaining Seconds.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// I changed the movieLength variable with different values and it worked for all.  

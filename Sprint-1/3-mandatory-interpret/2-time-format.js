const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

6

// b) How many function calls are there?

5

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// % is the remainder. that line of code divides the total seconds number by 60 and gives us the remaining seconds.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// in this line, totalMinutes of the move calculated. the remainder will be deducted and the rest of the second divided by 60 gives us the total minutes number.


// e) What do you think the variable result represents? Can you think of a better name for this variable?

// it represents the move length in hour, minutes and seconds. and it would be better understood as duration.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// yes as long as it receives the total seconds as a whole number it works fine.
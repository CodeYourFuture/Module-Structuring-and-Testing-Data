const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// Six variables are declared in this program.

// b) How many function calls are there?
// In this program, the only function call is:
// console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression movieLength % 60 yields the remaining seconds after converting the total seconds into full minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It calculates the total number of full minutes in the movie length.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// It represents the movie length formatted as a time string in hours:minutes:seconds format.
// A better name for this variable could be const formattedTime.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code does not produce the desired output for all possible values of movieLength.
// It does not work correctly for decimal values.
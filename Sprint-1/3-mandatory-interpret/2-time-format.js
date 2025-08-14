const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// They are 6 Variable Declarations


// b) How many function calls are there?

// It is one function call.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// movieLength % 60 calculates the number of remaining seconds of the movielength if divided by 6o which makes a minute


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// This line subtracts the leftover seconds from the total time and converts the remaining time into full minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
The variable result represents total run time for the movieLength, I would suggest MovieCompleteTime as a better name

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
There would be some odd results, remainingMinutes and remainingSeconds can return a single digit.
const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variables
// b) How many function calls are there?
// There is 1 function
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression movieLength % 60 calculates the remainder when movieLength (in seconds) is divided by 60.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// line 4 means total and exact amount of movie length after removing the remaining seconds not used for movie
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// it represent the total time used for the movie in Hours, minutes and seconds. a better name could be movieduration
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// yes it will work, provided there are no negative integer
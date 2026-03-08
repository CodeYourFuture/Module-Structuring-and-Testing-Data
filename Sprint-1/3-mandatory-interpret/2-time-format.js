const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// there are 6 variable declaration

// b) How many function calls are there?
// there is one function call (console.log())

// c) Using documentation, explain what the expression movieLength % 60 represents
// it represents the remaining of dividing movielength by 60
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// it means the integer quotient of dividing movieLength by 60

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// it represents the length of the movie in hours, minutes and seconds format
// a better name would be: formattedTime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// no it will not work for negative input values as it gives negative results
//

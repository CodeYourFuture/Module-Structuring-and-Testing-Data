const movieLength = 15489; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//6 variable declarations
// b) How many function calls are there?
//1 function call, console.log
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// Finds the remaining seconds after dividing movieLength by 60
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//It removes the extra seconds first, then divides by 60 to get complete minutes
// e) What do you think the variable result represents? Can you think of a better name for this variable?
//The movie length formatted as hours:minutes:seconds a better name could be movieTime
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//Yes but not perfectly very large or negative values could produce incorrect or confusing results because the code does not validate the input
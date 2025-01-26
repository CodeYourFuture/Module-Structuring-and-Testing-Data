const movieLength = 10000; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//there are 6 variable declarations in the program.

// b) How many function calls are there?
//there are 6 function calls.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//the declaration represents the remainder when we devide the movie legth by 60

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//line 4 is subtracting the remainingMinutes from totalMinutes then dividing that by 60.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//the variable result is returning time format that shows the remaining hors, minutes and seconds left in the movie.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//the code works for all values of movie length.

const movieLength = 8784; // length of movie in seconds
//const movieLength = 100;

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program? 6

// b) How many function calls are there? 1

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators 
// % is the module operator, which calculated the remainder of the division of movieLength by 60

// d) Interpret line 4, what does the expression assigned to totalMinutes mean? Computes the the difference between movielength and remaining minutes. And divides this by 60.

// e) What do you think the variable result represents? Can you think of a better name for this variable? It gived the time of the movie in hours, minutes and seconds.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer. It does work for all number inputs.
// f) For example, movieLength of 100 gives 0:-1:-40 and movieLength of 8784 gives 2:26:24
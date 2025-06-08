const movieLength = 823484; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//Answer: 6 variable declarations

// b) How many function calls are there?
//Answer: 1 function call

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//Answer: it represents the seconds remaining after dividing 8784 to 60 which is 24seconds

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//Answer: it represents the duration of the movie in minutes without the 24 seconds remainder

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//Answer: it represents the movie duration in hh:mm:ss , better name 'movie duration'

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//Answer:can't check for all values but it did work for the values I used

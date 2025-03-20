const movieLength = 108784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// Answer: there a six

// b) How many function calls are there?
// Answer: there are no functions in this code

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// Answer: we are calculating the remainder of movieLength by 60 using the modulus "&" operator

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Answer: we subtracting the seconds from the movie length '8784' then divide by 60 to get total minutes then you get 146min 4sec

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Answer: this will hold the time in hours minutes and seconds and it will format it, we can call it duration

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Answer: yes it is working with different values because the arithmetic calculator is set correctly 
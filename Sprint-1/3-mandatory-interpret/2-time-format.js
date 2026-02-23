const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// There are six, all six lines of code use const as a variable declaration. 

// b) How many function calls are there?

//There is only one funsction call, console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// It represents how many seconds remain, before converting them to minutes first. 

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// it represents the movie length converted to minutes, without the remaining seconds. 

// e) What do you think the variable result represents? Can you think of a better name for this variable?

//It represents the film length in a time string format. Better alternative could be formattedDuration, as it is self-explanatory,
//as opposed to generic 'result'.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// I have tried values between 0-9, ie all positive/whole numbers, and it works. However there is no input validation, ie negative numbersm, non-integers etc, so it won't work properly there.  

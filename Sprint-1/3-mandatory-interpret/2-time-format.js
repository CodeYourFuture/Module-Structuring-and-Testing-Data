const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer


// a) There are 6 variable declarations in this program:
// which are:

// movieLength

// remainingSeconds

// totalMinutes

// remainingMinutes

// totalHours

// result

// b) There are 2 function calls in this program.

// c) Expression movieLength %60 represents remainder of division by 60.

// d) expression assigned to totalminutes means minutes in the movie by removing the remaining seconds and dividing by 60.

// e) Result variable represents the total time. A better name would be totalTime.

// f) Yes code will work for all the values of movielength. It'll always return the total time with no problems. But It's not working if movielength less than 60 seconds, more than 24 hours or negative values.


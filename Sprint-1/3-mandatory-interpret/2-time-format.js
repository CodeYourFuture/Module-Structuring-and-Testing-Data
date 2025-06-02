const movieLength = -10; // length of movie in seconds

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


/*
a) There are 6 in total.
b) 0 function calls.
c) it represents the remainder from the division of movieLength by 60.
d) line 4 represents the total number of mins in the movie (as whole numbers -integers) by getting rid of the decimal parts (in secs).
e) Result represents the total movie duration (in exact hours, exact min and exact sec). movieDuration could be a good name.
f) it works. However, if there's enough time to form a whole hour(s) for example the results shows the total mins and total secs and so 
on. So I'd say it works.
*/

const movieLength = -9.5; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// Answer: 6 in total (on lines 1, 3, 4, 6, and 7)

// b) How many function calls are there?
// Answer: 3 (on line 10)

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// Answer: It returns the modulus (i.e. remainder) of a division

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Answer: It's the floor of the movie runtime in minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Answer: it's the formatted runtime of the movie (in Hours:Minutes:Seconds). A better name could be formattedRuntime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Answer: It won't work for all values, for example strings

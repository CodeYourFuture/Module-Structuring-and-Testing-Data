const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// Answer: 6

// b) How many function calls are there?

// Answer: 1 - console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// Answer: It sees how many whole minutes go into the movieLength, and tells you what was left over.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// Answer: It gets the total length of the movie in seconds, divides it by 60 to get the total length of the movie in minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// Answer: It represents the current time in the movie, so maybe 'timestamp' could be a better name.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// Answer: Negative values don't make sense. Long decimals aren't rounded. But positive integers work.

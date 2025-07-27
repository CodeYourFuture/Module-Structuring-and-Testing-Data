const movieLength = 0.23 + 0.3; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6
// b) How many function calls are there?
// 1
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// it takes the movieLength and removes the minutes, it leaves the remaining seconds
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// it gets just the movie length in minutes
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// gives the movie duration in "hours:minutes:seconds". a improved name could be "movieDurationFormatted"
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// yes it works for all lengths. we tested with negatives and large ints, even decimals. it breaks for NaN, modulo struggles with negatives, then theres the precision for when we added the floating points
const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6 in total all line with const
// b) How many function calls are there?
// just one line 10 - console.log
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//Since movieLength is in seconds, movieLength % 60 gives the remaining seconds after dividing the total time into full minutes.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//The expression (movieLength - remainingSeconds) / 60 converts the total movie length in seconds to the total number of full minutes.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
//The variable result represents the formatted movie length in the format. Name can be movieTimeFormatted
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// yes it's will work
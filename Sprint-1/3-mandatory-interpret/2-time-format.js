const movieLength = 8784536346344.633; // length of movie in seconds

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
// Divides movieLength by 60 and returns the remaining and assigns it to remainingSeconds

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It is deducting remainingSeconds from movieLength(also in seconds) and divide the result by 60, so it turns into minutes
// and finally assign it to totalMinutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The duration of movie, it can be renamed to movieDuration

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// With float numbers, it seems to need a rounding because the result seems ugly: 2:-26:-24.63299999999981

const movieLength = "839f"; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// Answer: There is 6 variable declarations
// b) How many function calls are there?
// Answer: There is one function call on line 10
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// Answer: this finds the remainder of movieLength when its divided by 60
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Answer: The expressions uses the modulo function to work out the remainder value which in this case works out the remaining seconds of the total movie length
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Answer: The variable `result` represents the movie length converted into hours, minutes and seconds. A better name would be `formattedMovieLength`.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Answer:  No it only works as intended when a Non negative integer is used however when Decimal, negative, or string values it does not work as intended.
// Decimal values will display decimal seconds, which does not cause an error, but the output may not be in the expected time format.
// Negative values will produce negative time values, and string values may produce NaN if they cannot be converted into a number.

const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// testing different cases
function movieLengthFormatter(movieLength) {
  const remainingSeconds = movieLength % 60;
  const totalMinutes = (movieLength - remainingSeconds) / 60;

  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
  return result;
}

console.log(movieLengthFormatter(0));
console.log(movieLengthFormatter(59));
console.log(movieLengthFormatter(10000));
console.log(movieLengthFormatter(-100));
console.log(movieLengthFormatter(200.4));
// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations.

// b) How many function calls are there?
// There is `console.log` as a function call.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// This expression is a remainder left after the movieLength value is divided by 60 and represents the value of reimaining seconds.
// % - is a remainder operator, or modulo operator.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// From the movieLength variable, we subtract the remainingSeconds value from the movieLength value.
// We then divide the result by 60 to get the totalMinutes value, that is the number of whole minutes in the movie duration.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the final result of the movie duration in the format of H:M:S.
// The better name for this variable could be movieLengthFormatted.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// There are a couple of edge cases that this code will not work for:
// if movieLength is less than 0, which is not a valid duration, the code will give calculation, but it will not return a valid result.
// if movieLength is a decimal number, the code will give calculation, but the format will not be followed.
//

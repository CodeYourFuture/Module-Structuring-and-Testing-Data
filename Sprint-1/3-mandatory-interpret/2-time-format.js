function clockFormatter(movieLength) {
  const remainingSeconds = movieLength % 60;
  const totalMinutes = (movieLength - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;
  const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
  return result;
}

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 declarations in this program.

// b) How many function calls are there?
//  1 function call in the console.log(...);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
/* movieLength % 60 represents the remaining seconds when the movie length of 8784 is divided by 60, thus giving the leftover seconds that don't fit into a full minute.
 */

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/* The expression subtracts the leftover seconds from the movie length and divides it by 60 to give the full minutes. Here's a simple formula to understand the logic, movie length = full minutes + leftover seconds
 */

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result outputs the time in a formatted time string of hours:minutes:seconds
// It could be more clear to give it a better name like duration or movieDuration.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
console.log(clockFormatter(0));
console.log(clockFormatter(69));
console.log(clockFormatter(15000));
console.log(clockFormatter(-10));
console.log(clockFormatter(20.4));
// yes, it worked for all values of movieLength, including 0, negative numbers, and decimal numbers. The code will work for any number, but the output may not be meaningful for negative or decimal values.

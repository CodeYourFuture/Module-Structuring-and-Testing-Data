const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// *Answer
// There are 6.

// b) How many function calls are there?
// *Answer 
// There is 1; console.log()

// c) Using documentation, explain what the expression movieLength % 60 represents
//*Answer
// This expression returns the remainder of seconds, after dividing the movieLength by 60, 
// using the modulus operator it returns 24 seconds
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// *Answer
// It is converting the seconds to minutes and rounding it to the last whole minute.

// e) What do you think the variable result represents? 
// *Answer
// The result is the duration of the film in hours, minutes and seconds - 2:26:24.

// Can you think of a better name for this variable?
// *Answer
//  movieDuration

// f) Try experimenting with different values of movieLength. 
// Will this code work for all values of movieLength? Explain your answer,
// *Answer
// I changed the value to;
// 1200 returned 0:20:00
// 92383.7 returned 25:39:43.69999999999709
//  Milliseconds appeared in the output because they were part of the 
//  input and were not explicitly removed, even though they were not required 
//  and it does make the output not what is expected.
//  In this cases there was no validation to stop this from occurring.

// -8784 returned -2:-26:-24
//  Negative numbers passed the test. 
//  In reality there should not be negative time in the movieLength and 
//  it should throw an error. In this cases there was no validation to stop 
//  this from occurring.

//  It worked with all numbers including decimals and negative numbers.



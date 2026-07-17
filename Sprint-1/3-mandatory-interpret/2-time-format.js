const movieLength = 8784 // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations

// b) How many function calls are there?
// There is one function call which is console.log

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// % is a remainder operator which will do movieLength / 60. This will give us the remainder which we will consider the remainder of this operation

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// In line 4 we are declaring the totalMinutes. we have the remainingSeconds which is 24. Then we will do ((8784 - 24) /60) =  146

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result shows the total remaining duration of a movie in terms of hours, minutes and seconds. We can also call it remainingTime.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// When using -8784, I had the same answers with 8784, except they were all negative numbers. -2:-26:-24
// When using 87.84, I had 0:1:27.840000000000003 which is still a readable time. But it doesn't round up the decimal numbers. 
// When using the String "8784", I had 2:26:24 which is the same answer as when I used 8784. Javascript is converts strings to integers automatically when subtracting
// When using the string "hello", I get the outcome NaN:NaN:NaN which means "Not a Number". the string hello can't work in divisions. 
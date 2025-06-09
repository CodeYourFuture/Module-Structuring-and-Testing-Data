const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//    6 variable declarations

// b) How many function calls are there?
//    1 function call; console.log().

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//    The expression gives the the number of seconds left over after converting full minutes.
//    As per documentation, The remainder operator (%) returns the remainder left over when one operand is divided by a second operand.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//    This line calculates the total number of minutes in the movieLength, after removing the leftover seconds.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//    The variable result represents the movie's duration in formatted time string 'Hours : Minutes : Seconds'
//    Better Name of the variable could be 'movieDuration'.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//    Yes, the code work for all non-negative values of movieLength.

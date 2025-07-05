const movieLength = 86401; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//------->ans: 6
// b) How many function calls are there?
//------->ans: 1 at the last line, that is console.log() .. it is a built-in function.
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//------->ans: The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//------->ans: (movieLength - remainingSeconds) / 60;
// e) What do you think the variable result represents? Can you think of a better name for this variable?
//------->ans: it generates a number in "seconds", for selection of name? the selected one is fine. as long as it follows the variable names convention and the reader or debugger easily understand it.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//------->ans: it has a constrain or maybe limitation, that is if value movie length is bigger that 86400 the time shown not appropriate, it should give a hint that it more than a day

const movieLength = 8784; // length of movie in seconds

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
// The remainder (%) operator returns the remainder left over when one operand is divided
// by a second operand. It always takes the sign of the dividend. 8784 % 60 = 24 It calculates the leftover
// seconds after full minutes are taken out.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// const totalMinutes = (movieLength - remainingSeconds) / 60;
// TotalMinutes means movie length in seconds minus remaining seconds and transforms it into minutes.

// e) What do you think the variable result represents? It represent time in the format: HH.MM.SS
// The variable Result has a too general name. I would rename it. Foe example, FormattingTime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// It works well for integers. Doesn't work for negative numbers and strings. Unless we convert them. for 0 it gives 0:0:0

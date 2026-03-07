const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6 variable declaration. Which are movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result

// b) How many function calls are there?
// 1 functions, which is Console.log

// c) Using documentation, explain what the expression movieLength % 60 represents
// It represents the remainder expression. This means that the remainder operator returns the remainder left over when one operand is divided by a second operand.
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// This command calculate the number of hours in the expression then extract the leftover minutes. 

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// It creates a formated string. for example: 2:30:23. That is the movie duration formated in Hours:Minutes:Seconds. 
//Better names could be; FormatedDuration or MovieDuration or FormatedTime. 

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// It would Works for positive integers only; not ideal for negatives, decimals, or proper formatting. 

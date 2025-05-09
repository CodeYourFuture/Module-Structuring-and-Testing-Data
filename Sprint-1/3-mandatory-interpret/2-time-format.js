const movieLength = 6000; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
    // There are 6 variables declarations in this program.
// b) How many function calls are there?
    // There are 4 functions called.
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
    // The expression is will divided the number by 60 and will give the remaining number like 7 % by 2 the result is 2 the remaining number is 1.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
    // 8784 minus by 24 then divide by 60.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    // NumberValueInHoursMinutesSeconds
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
    // This code will work with all number but the only work better with number has four number to give full value of the results includes the Value of hours, minutes and seconds.
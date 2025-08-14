const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//   Lines: 1, 3, 4, 9. Total 4
// b) How many function calls are there?
//   One, in the line 10
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//   Obtain as a result the reminder of the division of movieLength between 60
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//   The expression 
//   find difference of the movieLength minus the remainingSeconds to obtain the amount of seconds exactly divisible by 60
//   do the division to obtain the total in minutes, which is the value assigned to totalMinutes
// e) What do you think the variable result represents? Can you think of a better name for this variable?
//    The variable result represents the duration of the film, expressed with the format: HH:MM:SS
//    A better name could be movieDuration.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//    It works for all values of movieLength. With long names, the number of hours can be hundreds.

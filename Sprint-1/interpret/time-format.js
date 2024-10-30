const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in this program.

// b) How many function calls are there?
// There is only 1 function call here and its console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// The modulo % operator is used to find the remainder after dividing by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Total minutes is the total number of seconds divided by the remainder number of seconds, 8784 - 24 = 8760.
// To convert that number to minutes we have to divide by 60. 8760 / 60 = 146.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// result just formats the films runtime in to hours, minutes and seconds. 2 hrs 26 minutes and 24 seconds would be 2:26:24. A better name for this variable would be movieDurationFormat.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// This code only work as long as movieLength is a positive number. The code will still run with a negative number, however the output wil be wrong.
// In addition movieLength will not work when the duration is longer than 24 hrs. It will just keep adding to the number of hours. It may be better to add a day format into the code in this scenario.

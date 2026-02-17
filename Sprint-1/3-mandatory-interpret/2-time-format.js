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

//movieLength % 60 returns the remaining seconds after converting total seconds into full minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

//It subtracts the leftover seconds (remainingSeconds) from the total movie length (movieLength) to get the number of seconds that make up complete minutes, and then divides by 60 to convert those seconds into total minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

//result is too general — it does not tell what the value means.
//The variable result represents the movie running time in hours, minutes, and seconds (HH:MM:SS)
//A better variable name would be movieRunTime or formattedRunTime.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

//Yes, this code works for all positive integer values of movieLength.
//It converts seconds into hours, minutes, and seconds using division and remainder.
//For example, when movieLength = 5550, the result is 1:32:30.
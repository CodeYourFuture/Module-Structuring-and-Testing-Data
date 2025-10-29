const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6 declarations: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result

// b) How many function calls are there?
// 1 function call: console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
// % is the remainder operator - calculates remainder when dividing movieLength by 60
// Example: 8784 % 60 = 24 (seconds that don't fit into complete minutes)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// (movieLength - remainingSeconds) / 60 calculates complete minutes
// Subtracts leftover seconds (24) from total (8784), then divides by 60 to convert to minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Represents movie length formatted as "hours:minutes:seconds"
// Better names: formattedTime, timeString, movieDuration, formattedDuration

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Works mathematically for positive integers but has formatting issues:
// - Single digits aren't zero-padded (shows "1:6:5" instead of "01:06:05")
// - Negative values produce incorrect results
// - Would need padStart() for proper time formatting

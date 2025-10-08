const movieLength = 8974; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//Answer: There are six variable declarations in this program

// b) How many function calls are there?
// Answer: There is only one function call in the program

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// Answer: The expression movieLength % 60 represents the remainder when  movieLength is divided by 60

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Answer: The expression assigned to totalMinutes subtracts the leftover seconds from the movieLength and divide it by 60 to get the totalMinutes.
// This gives the total whole minutes of the movie without the leftover seconds.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Answer: The variable result represents the time in hours, minutes and seconds. A better name for the variable could be totalTime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Answer: I tried different positive values of movieLength and the code worked for all but result variable returned a negative value when I tried a negative number as the variable movieLength

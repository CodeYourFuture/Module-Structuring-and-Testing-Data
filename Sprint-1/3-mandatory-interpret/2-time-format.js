const movieLength = 9000; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//there are 6 variable declarations
// 1. movieLength
// 2. remainingSeconds
// 3. totalMinutes
// 4. remainingMinutes
// 5. totalHours
// 6. result

// b) How many function calls are there?
// their is 1 function call
// console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents The is expressing remaining number of seconds after converted to 60 seconds
// The expression `movieLength % 60` calculates the remainder when `movieLength` (the length of the movie in seconds)
// This gives the number of seconds that do not complete a full minute, effectively representing the remaining seconds after converting the total movie length into minutes.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression (movieLength - remainingSeconds) / 60 determines the total number of full minutes in the movie by removing the leftover seconds and then dividing the result by 60.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
//time
// The variable `result` represents the formatted time of the movie in the format "hours:minutes:seconds".
// A better name for this variable could be "movieDuration" to make it clearer that it holds the duration of the movie in a specific format.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

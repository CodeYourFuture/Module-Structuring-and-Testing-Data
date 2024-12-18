const movieLength = 1; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are six variable declarations

// b) How many function calls are there?
// 1 function call

// c) Using documentation, explain what the expression movieLength % 60 represents
// % is a modulus operator. It divides movieLength by 60 and returns the remainder. This is calculating the number of seconds left after full minutes have been established.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Subtracting remainingMinutes from movieLength will ensure we get an integer value for totalMinutes. 
// It then converts the movieLength from seconds to minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// result represent the total hours, minutes and seconds to watching the movie. Better name: movieDuration.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code will always work and give a reasonable value for every integer greater than or equal to 1
// Subtracting remainingMinutes from movieLength in Line 4 using the modulus operator will ensure we always get an integer value for totalMinutes. 

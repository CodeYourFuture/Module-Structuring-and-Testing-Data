const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are six variable declarations in this program 

// b) How many function calls are there?
// There is one function call - console.log()

// c) Using documentation, explain what the expression movieLength % 60 represents
// It tells us how many seconds are left after we count all the full minutes

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// This line calculates the total number of minutes in the movie

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result shows how long the movie is in hours, minutes, and seconds. I think "movieDuration" is better name for this variable

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code works for positive numbers and zero, but it doesn’t work right for negative numbers and may give strange results for decimal numbers

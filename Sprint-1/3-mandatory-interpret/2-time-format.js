const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program? 6

// b) How many function calls are there? 1 function call i.e console.log

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// It represents the division remainder of 8784 seconds and 60 seconds, which is 24.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// 8784 - 24 seconds / 60 = 146 minutes
// e) What do you think the variable result represents? Can you think of a better name for this variable? The variable result holds a string interpolation representing the movie length in Hours,minutes and seconds.
// - Another name for the variable result could be movieDuration.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes!, It will work for all values inserted in movieLength because the variable results is using string interpolation to represent the output of movie length.

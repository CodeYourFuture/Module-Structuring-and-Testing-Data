const movieLength = 150; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6
// b) How many function calls are there?
// Only One console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// Its the remainder operator it return the remainder left over when in this case 8784 / 60
// 60 goes into 8784 (146 times) wit a remainder of 24

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// calculate how many minutes has passed since the start of the movie

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// the total time of the movie in hours,minutes and seconds. Ive would have called it Runtime.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// I tried a few movie lengths and all of them comes out formatted in hours, minutes and seconds but while it works in simple cases
// it is not fully reliable where giving expected results is concerned

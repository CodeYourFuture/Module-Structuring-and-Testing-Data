//const movieLength = 8784; // length of movie in seconds
const movieLength = 9893; 
const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//six

// b) How many function calls are there?
// 1 i.e console.log

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// This is a reminder operator. It divides one number by another and gives a reminder.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/* const totalMinutes = (movieLength - remainingSeconds) / 60 
Firstly it will evaluate bracket i.e (movieLength - remainingSeconds) and then divide the value by 60.
*/
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The result represents the how long the movie is, in hours, minutes and seconds. It can named as MovieDuration.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes, I changed the value of movieLength and it worked. The movieLength is the variable used in calculating other 
// values and to evaluate the total length of movie.
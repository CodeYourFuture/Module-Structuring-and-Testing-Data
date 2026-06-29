const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
/* There are 6 declarations.
const movieLength 
const remainingSeconds 
const totalMinutes 
const remainingMinutes
const totalHours 
const result */

// b) How many function calls are there?
// one function call: console.log(result).

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
/* movieLenth % 60 means: Divide movieLength by 60 and return the leftover seconds.
Example: 8784 / 60 = 146 minutes, remainder 24 seconds. Which makes remainingSeconds = 24.*/

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/* line 4 is calculating the total number of whole minutes in the movie. It removes the leftover seconds (remainingSeconds=24) from movieLength (8784),
 leaving only the seconds that form complete minutes.
Dividing that value by 60 converts those full seconds into whole minutes. So tottalMinutes = 146.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// result represents formatted time string so the better name will be formattedTime.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer.
/* It works correctly with positive values, but breaks or becomes weird when:
negative number is used because time cannot be negative.
numbers less than 60 is used results in zero hour and minutes.
non-integer values are used, remainder logic becomes messy.
extremely large numbers are used, it works but formatting becomes unrealistic. */

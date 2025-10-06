const movieLength = 7784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${String(totalHours).padStart(2, "0")}:${String(
  remainingMinutes
).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// there are 6 variable declarations in this program. They are on lines 1, 3, 4, 6, 7 and 9

// b) How many function calls are there?
// there is 1 function calls in this program. And it is on line 10

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// the expression movieLength % 60 is using the modulus operator (%) to find the remainder when movieLength (8784) is divided by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/* line 4 is calculating the total number of minutes in the movie by subtracting the remaining seconds from the total movie length in 
seconds and then dividing that result by 60.*/

// e) What do you think the variable result represents? Can you think of a better name for this variable?
/* the variable result represents the total length of the movie in hours, minutes and seconds. A better name for this variable could 
be formattedmovieDuration.*/

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// yes this code will work for all values of movieLength as long as the value is a non-negative integer representing the length of a movie in seconds.

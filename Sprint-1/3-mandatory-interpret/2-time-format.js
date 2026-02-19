const movieLength = -8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer



// a) 6 variables declarations.

// b) 1 function call.

/* c) The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
In this case it will give the remainder of 8748 % 60 */

// d) It simply wants to get the length of the movie in minutes. subtract the remaining seconds from the movie length and convert to minutes.

// e) It represents the movie durations in hours, minutes and seconds. (movie duration).

/*f) I have tried three values and it worked. It will work perfectly for larger and smaller numbers.
However, with negative values it gives negative figures.*/ 


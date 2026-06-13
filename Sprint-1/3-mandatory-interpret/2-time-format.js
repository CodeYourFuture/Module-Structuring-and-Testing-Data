const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// Martin answer - there are 6 variable declarations on lines 1, 3, 4, 6, 7, 9

// b) How many function calls are there?

// Martin answer - there are no function calls

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// Martin answer - the expression movieLength % 60 uses the modulus operator which extracts the value remaining seconds after movieLength is divided by 60

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// Martin answer - the expression totalMinutes = (movieLength - remainingSeconds) / 60 subtracts remaining seconds from movieLength (total length of movie in seconds) and divides the result by 60 (representing seconds in one minute) to return the total number of minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// Martin answer - result represents a formatted express of the movie duration as hours, minutes and seconds.  A better name for this variable is formattedMovie

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

/* - Martin answer - it works for numerical numbers I have tried, positive and negative, but in the real world you would want to prevent entry of negative numbers.  
I have tried adding trailing zeros (8784.00), but JavaScript ignores them.  
I have tried converting it to a string ("8784" or "8784.00"), but I get the same results as JavaScript automatically converts them to a number.
Enter text returns all values as NaN - NaN:NaN:NaN

*/

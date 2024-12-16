const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
/* The variables declared are: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result
There are 6 variables */

// b) How many function calls are there?
/* There is only 1 function console.log. The other lines are only doing arithmetic and not being assigned as functions. */

// c) Using documentation, explain what the expression movieLength % 60 represents
/* According to MDN Web Docs, the % in JavaScript is the remainder operator, which returns what is
leftover when one operand is divided by a second operand. In this line, 60 represents minutes and the
remainder would the the leftover seconds. */

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/* Because line 3 isolated the remainingSeconds, line 4 is now subtracting those remainingSeconds
from the total movie length and dividing that by 60, to return only the full minutes remaining. */

// e) What do you think the variable result represents? Can you think of a better name for this variable?
/* The variable result will print the time stamp of the movie length remaining in the hours:minutes:seconds
format. A better name could be "movieTimeRemaining" */

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
/* Other values of movieLength will work only if there are no changing values of time because the variables
have been assigned as constants. Effectively, it would not be a good program to judge a continuously
changing value for movie time remaining. */
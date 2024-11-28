const movieLength = 8760; // length of movie in seconds
// const movieLength = 8784;

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

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer


/*    Answer

a) 6

b) 1

c) This uses a  modulus operator (%) to find the remainder when movieLength is divided by 60. 

d) Calculating the total number of full minutes in movieLength. 
movieLength represents the total duration of the movie in seconds ,remainingSeconds is the number of seconds left after accounting for all full minutes (from the previous line).
By subtracting remainingSeconds from movieLength, we get only the seconds that make up complete minutes, effectively rounding down to the nearest minute.

e)timer

f) Yes, it works correctly for all postive numbers,but I get an error if movieLength value is either negative or fractional number.

*/

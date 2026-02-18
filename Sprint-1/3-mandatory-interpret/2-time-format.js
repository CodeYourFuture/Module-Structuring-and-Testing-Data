const movieLength = 98686; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const formattedMovieLength = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(formattedMovieLength);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//  There are 6 variable declarations, on lines 1, 3, 4, 6, 7 and 9

// b) How many function calls are there?
//  There is only 1 function call on line 10 (console.log())

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//  The % is called modulo operator. This operator divides a number by a chosen value (in this case 60) and returns the leftover amount: i.e.: 130 % 60 = 10

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// remainingSeconds is the leftover of movieLength divided by 60, meaning it's a number of seconds smaller than 1 minute. In line 4, these seconds are first subtracted from the total length of the movie, leaving a number of seconds that, when divided by 60, will result in an integer number, giving us the number of full minutes in the movie (totalMinutes)

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// result is a string with the movie length in H:M:S format. A possible better name could be formattedMovieLength

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code technically works. It always return the movie length with a H:M:S format, but with room for improvement. In cases where the number of seconds or minutes are less than 10, they are displayed as only 1 digit. But conventional time formatting would require 2 digits. For example, a time of 2 hours, 7 minutes and 3 seconds, should be displayed as 03:02:07, but the code would print 2:7:3, making difficult to identify the result as a length of time. To improve the code, we could add logic that would account for cases in which the hour, minutes or seconds are less than 10 by adding a 0 before them.

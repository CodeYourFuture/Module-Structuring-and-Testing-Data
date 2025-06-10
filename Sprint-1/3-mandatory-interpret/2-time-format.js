const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60; //24
const totalMinutes = (movieLength - remainingSeconds) / 60; //146

const remainingMinutes = totalMinutes % 60; //26
const totalHours = (totalMinutes - remainingMinutes) / 60; //2.03 hours

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

/* a) How many variable declarations are there in this program?

There is 6 variable declarations

*/

/* b) How many function calls are there?

 1 = console.log();

*/

/* c) Using documentation, explain what the expression movieLength % 60 represents
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

MovieLength % 60 gives the number of seconds left after dividing movieLength into full minutes

*/

/*d) Interpret line 4, what does the expression assigned to totalMinutes mean?

This line calculates the number of full minutes in the movie.
First, it subtracts the remaining seconds that don’t make up a full minute.
Then it divides the rest by 60 to convert seconds into full minutes.

So the result is the total number of whole minutes in the movie.

*/

/*e) What do you think the variable result represents? Can you think of a better name for this variable?

const timeInHMS

*/

/* f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

This code works correctly for most values of movieLength as long as 
it is a non-negative number (0 or greater).

It works best when movieLength is a whole number of seconds (integer ≥ 0).
*/

const movieLength = 8784; // length of movie in seconds

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
// a) 6 variable declarations: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result.
// b) 1 function call: console.log.
// c) % is the modulo operator - it gives the remainder after dividing. movieLength % 60 gives the leftover seconds that don't make a full minute.
// d) Line 4 subtracts the leftover seconds from movieLength, then divides by 60 to get the total whole minutes in the movie.
// e) result is the movie length formatted as hours:minutes:seconds, like a timer display. A clearer name could be formattedTime.
// f) The code should work for any positive number of seconds. If movieLength were negative or not a whole number, the output would look wrong or make no sense.

const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// # Answer: There are 5 variable declarations in this program.

// b) How many function calls are there?
// # Answer: There are 0 function calls in this program.

// c) Using documentation, explain what the expression movieLength % 60 represents
// # Answer: The expression `movieLength % 60` calculates the remainder when `movieLength` is divided by 60.
// # This is used to find the number of seconds that do not fit into complete minutes.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// # Answer: The expression `(movieLength - remainingSeconds) / 60` calculates the number

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// # Answer: The variable `result` represents the formatted time of the movie in the format "hours:minutes:seconds".
// # A better name for this variable could be `formattedMovieTime`.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// # Answer: Yes, this code will work for all non-negative integer values of `movieLength`.
// It will correctly calculate the hours, minutes, and seconds regardless of the length of the movie.

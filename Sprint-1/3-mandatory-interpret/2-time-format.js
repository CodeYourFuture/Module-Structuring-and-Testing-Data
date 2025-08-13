const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 5 variable declarations in this program:
// 1. `movieLength` on line 1
// 2. `remainingSeconds` on line 3
// 3. `totalMinutes` on line 4
// 4. `remainingMinutes` on line 6
// 5. `totalHours` on line 7

// b) How many function calls are there?
// There are no function calls in this program. All operations are performed using arithmetic operators and string interpolation.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression `movieLength % 60` calculates the remainder when `movieLength` (in seconds) is divided by 60. This gives the number of seconds that do not fit into complete minutes, effectively providing the remaining seconds after converting to minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression `(movieLength - remainingSeconds) / 60` calculates the total number of minutes in the movie. It first subtracts the remaining seconds from the total movie length (to account for any leftover seconds), and then divides the result by 60 to convert seconds into minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable `result` represents the formatted time of the movie in the format "hours:minutes:seconds". A better name for this variable could be `formattedMovieTime` or `movieDuration` to make it clearer that it holds the duration of the movie in a human-readable format.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes, this code will work for all non-negative integer values of `movieLength`. It will correctly convert any length of the movie given in seconds into the format "hours:minutes:seconds". However, if `movieLength` is negative, the output will not be meaningful, as negative time does not have a valid representation in this context. Therefore, it is advisable to ensure that `movieLength` is a non-negative integer before running the code.

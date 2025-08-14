const movieLength = 8314.5; // length of movie in seconds

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

// a) There are 6 variable declarations in this program:
//    1. `const movieLength = 8784;`
//    2. `const remainingSeconds = movieLength % 60;`
//    3. `const totalMinutes = (movieLength - remainingSeconds) / 60;`
//    4. `const remainingMinutes = totalMinutes % 60;`
//    5. `const totalHours = (totalMinutes - remainingMinutes) / 60;`
//    6. `const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;`

// b) There is 1 function calls in this program console.log(result);. 

// c) The expression `movieLength % 60` calculates the remainder when `movieLength` (the total length of the movie in seconds) is divided by 60.
// This gives the number of seconds that do not complete a full minute, effectively providing the remaining seconds after converting the total movie length into minutes.

// d) The expression assigned to `totalMinutes` calculates the total number of minutes in the movie by subtracting the remaining seconds from the total movie length and then dividing by 60.
// It converts the total movie length from seconds to minutes, effectively giving the total number of complete minutes in the movie.

// e) The variable `result` represents the total duration of the movie formatted as "hours:minutes:seconds".
// A better name for this variable could be `formattedMovieDuration` or `movieDurationFormatted` to make it clear that it contains the movie's duration in a specific format.

// f) This code will work for all values of `movieLength` that are non-negative integers.
// However, if `movieLength` is negative, the calculations will still work but may not make sense in the context of a movie duration.
// If `movieLength` is a floating-point number, the output will still be formatted correctly, but the seconds and minutes may not be whole numbers.
// If `movieLength` is a very large number, the code will still function correctly, but the output may not be practical for real-world movie durations.
// The code assumes that `movieLength` is a valid non-negative number representing the length of a movie in seconds, and it will produce a formatted string representing that duration in hours, minutes, and seconds.
// The code does not handle cases where `movieLength` is not a number or is undefined, which could lead to unexpected results.
// The code is designed to handle typical movie lengths, but it may not be robust against all possible inputs.


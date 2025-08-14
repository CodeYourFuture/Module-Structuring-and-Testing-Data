const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program? => There are six variable declarations in this program:
    // - Line 1: movieLength
    // - Line 3: remainingSeconds
    // - Line 4: totalMinutes
    // - Line 6: remainingMinutes
    // - Line 7: totalHours
    // - Line 9: result 

// b) How many function calls are there? => There is only one function call in this program:
    // - Line 10: console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
    // The expression `movieLength % 60` calculates the remainder when `movieLength` (the length of the movie in seconds) is divided by 60.
    // This operation is used to determine the number of remaining seconds after converting the total movie length into minutes.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
    // The expression `(movieLength - remainingSeconds) / 60` calculates the total number of minutes in the movie by first subtracting the remaining seconds
    // from the total movie length (in seconds) and then dividing the result by 60. This gives the total number of complete minutes in the movie.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    // The variable `result` represents the formatted time of the movie in the format "hours:minutes:seconds". A better name for this variable could be `formattedMovieTime`

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
    // The code will work for all non-negative integer values of `movieLength`. It will correctly calculate the hours, minutes, and seconds for any valid movie length.
    // However, if `movieLength` is negative, the calculations will still work but may not make sense in the context of a movie's length. 
    // If `movieLength` is a non-integer (e.g., a float), the results will still be calculated, but the output may not be meaningful in terms of time representation.

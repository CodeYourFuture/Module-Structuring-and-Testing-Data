const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 5 variable declarations in this program:movieLength,remainingSeconds, totalMinutes, remainingMinutes, totalHours


// b) How many function calls are there?
// There is 1 function call in this program: console.log(result);



// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
// The expression movieLength % 60 is a modulus operation, which calculates the remainder when movieLength is divided by 60. 
// This operation is typically used to extract the remaining seconds after converting a total time (in seconds) to minutes.



// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression calculates the total number of complete minutes in the movie. 
// It first subtracts the remaining seconds (remainingSeconds) from the total movie length (movieLength), ensuring that only full minutes are left. 
// Then it divides the result by 60 to convert the total time from seconds to minutes



// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the formatted duration of the movie in hh:mm:ss format (hours:minutes:seconds).
// A better name for this variable would be:formattedTime, movieDuration, timeString




// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code will work for most values, but there are some edge cases where it could produce incorrect or unexpected results:
// Negative values: The code does not handle negative values for movieLength, resulting in negative times (e.g., -1:-30:-10), which doesn’t make sense in this context.
// Values less than 60: If movieLength is less than 60 seconds, the hours and minutes will be 0, which works fine. For example, movieLength = 45 will give 0:0:45.
// Large values: The code can handle very large values, but there’s no limit or check on the maximum duration.

const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in total: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result

// b) How many function calls are there?
// T There is 1 function call in this program: console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// According to the documentation, the remainder operator (%) returns the remainder after dividing one number by another.
// In this case, movieLength % 60 divides movieLength (which is in seconds) by 60,
// And returns the leftover seconds that don't fit into a full minute.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// This line removes the leftover seconds (remainingSeconds) and converts the remaining whole seconds into minutes.
// So it gives you the total number of whole minutes in the movie.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The result variable represents the final formatted time of the movie in hours, minutes and seconds - hours:minutes:seconds format.
// A better name could be formattedTime or movieDuration.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// If I set movieLength to 8784, the output will be "2:26:24", which is correct,
// so this is a normal case where the code works as expected.

// If I set movieLength to 0, the output will be "0:0:0", which is also correct,
// It shows it can handle edge cases even though it is an unusual value.

// If I set movieLength to -200, the output will be "-1:-3:-20", which is not a valid time format,
// This shows that the logic breaks because the code does not protect against invalid negative inputs.

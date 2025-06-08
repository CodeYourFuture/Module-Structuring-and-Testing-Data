const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// Answer: they are 5 variable declarations which are all defined by using const variable.
// they are movieLength, remainingSeconds, totalMinutes, remainingMinutes, and result.

// b) How many function calls are there?
// Answer: there are no function calls in this program all the code is just variable declarations and assignments.

// c) Using documentation, explain what the expression movieLength % 60 represents
// Answer: The expression `movieLength % 60` calculates the remainder when `movieLength` is divided by 60. this is whats used to find the remaining seconds after converting the total movie length from seconds to minutes.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Answer: The expression "(movieLength - remainingSeconds) / 60" calculates the total number of minutes in the movie by first subtracting the remaining seconds from the total movie length in seconds and then dividing that result by 60 to convert seconds to minutes. This gives us the total minutes of the movie excluding the remaining seconds.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Answer: The variable "result" represents the formatted time of the movie in the format "hours:minutes:seconds". A better name for this variable could be "movieDuration" to make it clearer that it holds the duration of the movie in a readable format.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Answer: Yes this would work for all different values of "movieLength" as long as the value is a non-negative integer. The code correctly calculates the hours, minutes, and seconds regardless of the total length of the movie in seconds. If the value of "movieLength" is negative it would still work but would yield a negative time format which may not make sense in a real-world context and produce errors.

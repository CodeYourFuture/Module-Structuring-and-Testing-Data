const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
console.log(remainingSeconds)
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations


// b) How many function calls are there?
// There are no function calls.


// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression return the reminder from movieLength % 60. In this case returns the number of seconds left which is  24.


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression evaluates to total number of movie minutes by subtracting the number of seconds.


// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represent the duration of thr movie in hours,minutes and seconds. 
// A better name fot this variable is movieDuration. Duration it refers allays to time but length we can use it as general sizing.e.g. we use length for strings, arrays ect.


// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The code will work for all the values of movieLength. But if we use negative numbers it will give us an invalid duration.
// Ex movieLength = -8784  movieDuration = -2: -26: -24

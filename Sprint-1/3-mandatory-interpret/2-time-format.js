const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// Six, every line that starts with "const" keyword.

// b) How many function calls are there?

// One, line 10.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// It calculates how many seconds are left over.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// It first removes the leftover seconds from the total movie length, then converts the remaining seconds into minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// It represents a formatted time string and since it's a movie, i would change "result" variable to "movieDuration".

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// The code wouldn't work with decimal numbers "because movieLength" is a whole number, also negative numbers won't work
//because movies can't be less than zero.

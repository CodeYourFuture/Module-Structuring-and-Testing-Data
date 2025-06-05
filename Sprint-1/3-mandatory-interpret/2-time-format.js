//const movieLength = 8784; // length of movie in seconds
//const movieLength = 3600; 
const movieLength = 1000;

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in this program: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result.

// b) How many function calls are there?
// There are no function calls in this script.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression movieLength % 60 calculates the remainder when movieLength is divided by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression calculates the total number of minutes in the movie by subtracting the remaining seconds from the total movie length and then dividing by 60.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result is time of the movie in the format "hours:minutes:seconds". We can named instead movieDuration.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes, this code will work for all integer values of movieLength. It will correctly calculate the hours, minutes,
//  and seconds regardless of the length of the movie, as long as it is a valid number.

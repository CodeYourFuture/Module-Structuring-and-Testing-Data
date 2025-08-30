const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declaration 

// b) How many function calls are there?
// Only one function is called 

// c) Using documentation, explain what the expression movieLength % 60 represents
// The expression movieLength % 60 calculates the remaining seconds after converting the total movie length from seconds into full minutes. It gives the number of seconds left over after dividing by 60.


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Line 4 calculates the total number of whole minutes in the movie 

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The time by hours:minutes:seconds, I think total time would be a better name 

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// his code works correctly for most positive integer values of movieLength and accurately converts seconds into hours, minutes, and seconds.
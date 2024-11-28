const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6 variable declarations

// b) How many function calls are there?
// 1 function call

// c) Using documentation, explain what the expression movieLength % 60 represents
// The expression movieLength % 60 is a modulus operation in programming, where the % operator returns the remainder when dividing movieLength by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression is taking the value of the movieLength and subtract the value that remained after dividing the movieLength by 60,
// it then divides the answer with 60

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// I think it represents the hours:minutes:seconds

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// It does work with different values. Every value that will assigned to movieLength will ne used to calculate the time

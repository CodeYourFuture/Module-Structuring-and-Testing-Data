const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// There are 6 variable declarations


// b) How many function calls are there?

// There's only one function call - console.log(result);


// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// The expression gives the remainder after dividing the movie length by 60


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// Line 4 is remaining seconds from the movie length, then divides it by 60 to get the total minutes.


// e) What do you think the variable result represents? Can you think of a better name for this variable?

// The result variable shows the movie duration in string format "HH:MM:SS" 
// A better name for this variable could be timeStamp

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// The code only works for values that are positve, but not for negative number or 0.
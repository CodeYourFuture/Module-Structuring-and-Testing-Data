const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
/* One. movieLength

// b) How many function calls are there?
/* One. console.log

// c) Using documentation, explain what the expression movieLength % 60 represents
/* It is used to calculate the remaining seconds in the movie length (given in seconds). 
Here, % is the modulus operator, which calculates the remainder of two numbers when divided.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/*  It is calculating the total number of minutes in the movie length, excluding the remaining seconds.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
/* Total length of the movie. 
"total_length"

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
It works for non-negative values of movieLength.
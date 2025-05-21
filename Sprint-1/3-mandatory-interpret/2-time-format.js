const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//Answer
//6 times
//const movieLength = 8784;

//const remainingSeconds = movieLength % 60;

//const totalMinutes = (movieLength - remainingSeconds) / 60;

//const remainingMinutes = totalMinutes % 60;

//const totalHours = (totalMinutes - remainingMinutes) / 60;

//const result = ...



// b) How many function calls are there?
//Answer
//1 time console.log()
//There are no other function calls in this code — just arithmetic operations and string interpolation.



// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators


//Answer:
// The modulo operator % returns the remainder after dividing movieLength by 60. In this context, movieLength % 60 gives the number of seconds that are left over after converting the full number of seconds into whole minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

//answer:
//The expression calculates the total number of whole minutes in movieLength. It subtracts the remaining seconds (which don’t make up a full minute), then divides the rest by 60 to get the number of full minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//Answer:
//The result variable is showing the time in hours:minutes:seconds format. A clearer name like formattedTime or timeString would make it easier to understand what the variable represents just by looking at it.


// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

//Answer: 
//Yes it works with other positive integers  

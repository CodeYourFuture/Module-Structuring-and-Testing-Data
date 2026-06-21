const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations.

// b) How many function calls are there?
// Only one, console.log() is the function call.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// % is a remainder operation which in this expression trying to calculate the remaining seconds to be shown in the Hour:Minute:Second format.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Line 4 is calculating the quotient of the calculation (8784-remainder) divided by 60 to find the movie length in minute. That will be later used to find the display minute in the Hour:Minute:Second format.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// I think the original movie length is in second and this code is to calculate the display of movie length in the Hour:Minute:Second format like what what we see in a normal movie information.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//When testing the output with different values of movie length, the output seems right. No matter a 0 value, small or large value, it can display the the Hour:Minute:Second format well. 
// One thing I have comment on is the display format is not in two digit in each holder of Hour:Minute:Second format. So there is a case 1:5:5 can be displayed which doesn't look user friendly for audience.

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
// there is only one function call

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression returns only the remainder of the movieLength once its divided by 60

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// this first gets the total seconds by subtracting remaining seconds from movieLength and then 
// The value got is converted to minutes by dividing it by 60 

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// it represents the totalHours, remainingMinutes, remainingSeconds respectively to a string format
// The best name would be time or totalTime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes it will work on any number because it does the conversion in Hours, Minutes and Seconds, 
//if a value is too small it will be in seconds and if too big it will start from hours

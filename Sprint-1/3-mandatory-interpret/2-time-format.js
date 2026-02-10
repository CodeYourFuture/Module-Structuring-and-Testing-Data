const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

//Answers:
//a) There are 6 variable declarations in this program. They are on lines 1,3,4,6,7, and 9.
//b) There is 1 function call in this program. It is on line 9.
//c) The expression movieLength % 60 represents the remainder when movieLength is divided by 60.
//d) The expression convert the total movie length into minutes, ignoring the leftover seconds.
//e) The variable result represents the total length of the movie in hours, minutes, and seconds. 
// a better name is movieLength 
//f) This code work perfectly for positive numbers> However, it doesn't work for negative or very large numbers, and decimals.




// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

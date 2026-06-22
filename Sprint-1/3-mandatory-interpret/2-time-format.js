const movieLength = 10652; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// Answers 

// a) 6

// b) One function call is on this code - console.log() in line 10.

// c) The remainder (%) operator returns the remainder left over when one operand is divided by a second 
// operand. It always takes the sign of the dividend.

// d) In line 4 the totalHours is calculated by subtracting the remainingMinutes from the totalMinutes and then dividing that answer by 60

// e) It is a string representing the time movie time in hours, minutes and seconds

// f) yes, because the variables for calculating the results use a formulas that will work with any number that is assigned to the movieLength variable
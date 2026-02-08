const movieLength = 4; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//      there are 6 declarations

// b) How many function calls are there?
//      0
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//      it divides the first operand (number) by the second operand and returns the remainder 

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//      line 4 subtracts the remaining seconds so the we can work with the whole Minutes  

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//      result gives us a string literal with the results of the calculation perhaps a better name would be runLength or watchTime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// i have went from high (2254:56:54) to low (0:1:24) and it seems to work for any number.
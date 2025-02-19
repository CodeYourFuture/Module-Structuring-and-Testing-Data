const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// movieLength 
// b) How many function calls are there?
//  remainingSeconds
//  totalMinutes
//  totalHours
//  remainingMinutes
    
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

//The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
// 8784/60 remain 24



// d) Interpret line 4, what does the expression assigned to totalMinutes mean? 

//

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// movieTime, different timeformat in HH:MM:SS

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// min:sec  it work for all values
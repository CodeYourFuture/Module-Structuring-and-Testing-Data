const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// there is 6 variable declarations 

// b) How many function calls are there?
// there is only 1 function call which is the last onw in line 10 console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//modulus operator % gives the remainder after dividing one number by another.which is in this case8784 % 60 = 24 second 


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//we are converting the seconds into minutes by dividing by 60 

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//Duration of the movie in hours, minutes, and seconds.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//yes it will work for all values of movieLength  because the code will always convert seconds into hours, minutes, and seconds format.
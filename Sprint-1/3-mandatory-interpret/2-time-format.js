const movieLength = 81034; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
    // Answer: There are 6

// b) How many function calls are there?
    // Answer: There are no function calls

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
    // Answer: This devides values and gives us the remainder 

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
    // Answer: It subtracts remaining seconds from movie length then devides that by 60

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    // Answer: This will display the movie length formatted in hours, minutes and seconds, it can be named totalTime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
    // Answer: Yes it works with all values, this can be because there are template litterals in the result variable 
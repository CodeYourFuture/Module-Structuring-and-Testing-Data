const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//  6
// b) How many function calls are there?
//  0
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// It represent the remainder of movieLength divided by 60 (two operands)
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// it means movielength without remainder divided by 60 to give how long it take in minutes without the remaining seconds(remainders).
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// it represent the duration of the movie in hr min and sec , "duration" is better variable naming
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//movie time is always positive but i have checked it using many numbers but when we see it just in correct code perispective since it doesnt work for float numbers and negative numbers (conceptually since their is no negative duration) i can say it lacks some kind of specificity


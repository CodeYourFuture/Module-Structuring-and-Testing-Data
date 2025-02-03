const movieLength = 100; // length of movie in seconds

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

//Answers
// a)The above code has 6 variable declarations

// b) There is one function call

// c) we are dividing by 60 to get the remaining seconds the movie is left with.

// d) we are performing a subtraction operation to get the a number only divisible by 60.
//   We then do a division operation by 60 to get the total in minutes

// e) the variable result represent how long the movie is i na format hh:mm:ss, and a better name would be movieDuaration
// f) The code will work if I change the values of movie length because it is based on mathematical logic

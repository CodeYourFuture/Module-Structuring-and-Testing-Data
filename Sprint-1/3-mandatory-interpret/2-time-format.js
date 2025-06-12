const movieLength = 10453; 

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60; 

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in this code:
// 1. const movieLength
// 2. const remainingSeconds
// 3. const totalMinutes
// 4. const remainingMinutes
// 5. const totalHours
// 6. const result


// b) How many function calls are there?
// There is 1 function call in this code:
// 1. console.log(result); - this is a function call to log the result to the console.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// movieLength % 60 tells how many minutes are left over after counting full hours. 



// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// This expression means that we are calculating the total number of minutes in the movie by subtracting the remaining seconds from the total movie length and then dividing by 60 to convert seconds to minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// it represents the formatted time of the movie in the format "hours:minutes:seconds". A better name for this variable could be `formattedMovieTime` to make it clearer that it holds the duration of the movie in a specific format.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// the code worked with different values of movieLength because it uses arithmetic operations to calculate hours, minutes, and seconds, which are not dependent on specific argument values.
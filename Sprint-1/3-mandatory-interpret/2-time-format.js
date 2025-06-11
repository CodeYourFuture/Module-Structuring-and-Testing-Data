const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in this program: 'movieLength', 'remainingSeconds', 'totalMinutes', 'remainingMinutes', 'totalHours', and 'result'.


// b) How many function calls are there?
// There is only one function call whcich is 'console.log(result)' on line 10. Lines 3, 4, 5, and 6 are implicit calls made by arithmetic operations which do not count as function calls, while line line 9 is a template literal.


// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// The expression 'movieLength % 60' uses the remainder operator to calculate the number of seconds remaining after dividing the total movie length by 60 (converting seconds into minutes). 
// Running 8784 % 60 in terminal returns 24, meaning there are 24 seconds remaining after converting the 'totalMovieLength' into minutes. This is correct because 8784 - 24 = 8760, 
// which is 146 minutes (or 2 hours and 26 minutes) as confirmed by 'console.log(result)' the final output: 2:26:24.


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// This expression is taking the total movie length in seconds, subtracting the remaining seconds (the output from line 3), and then dividing by the result of 8760 by 60 to convert the total seconds into total minutes.


// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable 'result' represents the length of the movie formatted in hours, minutes, and seconds (HH:MM:SS). A better name for this variable could be 'formattedMovieLength' or 'totalMovieDuration' to make the output of the program clearer.


// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// const movieLength = 9426; // Output: 2:37:6  
// const movieLength = 7982; // Output: 2:13:2
// const movieLength = 5423; // Output: 1:30:23

// After nunning the program several times with different values, the code will work for all values of 'movieLength' as it correctly calculates the hours, minutes, and seconds from the total seconds provided.
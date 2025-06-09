const movieLength = 8784; // length of movie in seconds

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

//Answers:

// a) There are 6 variable declaration in the code
movieLength
remainingMinutes
remainingSeconds
totalHours
totalMinutes
result

// b) There is one function call:
console.log(result);

// c) 
movieLength % 60
// This expression works out the remainder of the movieLenght after its devided by 60.
// the movieLenght devided by 60 equals 24 seconds, so expression have converted the whole
// number (8784) to minutes to be divided by 60 to get 24 seconds.

// d) This line refers to the declared variable totalMinutes. The expression is subtracting 
// the movieLenght from the reminingSeconds (remainder) 24 seconds to then devide that total 
//by 60. The result will rpresent the totalMinutes. (8784-24) / 60

// e) The variable result represent the time lenght in the hour:minute:second format.
// A better name can be formatedResult.

// f) When I run the code with 0 as the value of movielength the final output for the code is
// 0:0:0   I think the 0 value is working well with the code.

// I have tried new value for movielength as 1946, the output was:
// 0:32:26  This ouput seems to be alright as well.

// I have also tried a negative values and the output was negative.
// movielength = -30946;
// output was {totalHours}:-35:-46
/* I think the negative value is not working with this code as the output is negative */


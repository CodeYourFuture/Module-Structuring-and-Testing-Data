// const movieLength = 8784; // length of movie in seconds

// const remainingSeconds = movieLength % 60;
// const totalMinutes = (movieLength - remainingSeconds) / 60;

// const remainingMinutes = totalMinutes % 60;
// const totalHours = (totalMinutes - remainingMinutes) / 60;

// const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
// console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

//Sam answers
//a)There are 6 variable declarations in this program in line 1,3,4,6,7 and 9.

//b)There is only 1 function call in line 10 >> console.log

//c)The symbol % is used for remainder operator. This operator divides two numeric values and returns the remainder of that division.
//For eg : if we want to know the remainder of 11/6 , we use 11 % 6 and the result we will receive will be 5.
// From MDN "The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend."

//d)On Line 4, we are trying to calculate the total runtime of movie in minutes by first deducting total seconds(movieLength) - remainder of the second not divisible by 60(remaining seconds) and dividing it by 60 to convert seconds to minutes

//e)The variable result represents the total movie time in Hours, Minutes and Seconds.I think the better name for this variable would be movieRuntime as it matches with the theme of the program and easily understandable.

//f) Yes the code will work for all value of movieLength. As we have correctly defined arguments to calculate total hour, minute and seconds.
//The only exception would be if the value of movieLength had decimal number, in that instance we may get an unusual looking decimal placements which can be fixed with Math.Round

const movieLength = 9234.12345; // length of movie in seconds

const remainingSeconds = Math.round(movieLength % 60);
const totalMinutes = Math.round(movieLength - remainingSeconds) / 60;

const remainingMinutes = Math.round(totalMinutes % 60);
const totalHours = Math.round(totalMinutes - remainingMinutes) / 60;

const movieRuntime = `${totalHours}hours ${remainingMinutes}minutes ${remainingSeconds}seconds`;
console.log(movieRuntime);

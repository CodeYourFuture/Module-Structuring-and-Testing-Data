const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in this program: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result

// b) How many function calls are there?
// There is only one function call in this program: console.log(results);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression movieLength % 60 uses the remainder operator ( % ) to work out how many seconds are left over after dividing the total movie length by 60.
// So if movieLength is 8784 seconds, dividing by 60 gives 146 full minutes with 24 seconds left - that leftover part (24) is what this expression returns.
// According to MDN Docs, the remainder operator gives the value that's left after one number is divided by another

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression totalMinutes is a variable that stores the result of the calculation (movieLength - remainingSeconds) / 60. It represents the total number of full minutes in the movie after converting the total seconds into minutes. 
// According to MDN Docs, a variable is a named container used to store data values. In this cause, totalMinutes holds a numeric value that JavaScript can use later in other calculations, like finding the number of hours or remaining minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result stores a formatted string that combines the total hours, remaining minutes, and remaining seconds into one readable time format.
// It uses template literals (the backtick syntax `...`) to insert each variable's value directly into the string using ${} placeholders.
// so, for example, if totalHours = 2, remainingMinutes = 26, and remainingSeconds = 24, the value of result becomes the string "2 : 26 : 24". 
// According to MDN Docs, template literals allow embedded expressions inside strings, making it easier to create dynamic text
// A better name for the variable result would be formattedTime because it makes it clearer what the value actually represents. Moreover, using a name like formattedTime makes the code easier to read and understand

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// This code works properly for positive whole numbers because the reminder ( % ) and division ( / ) operators correctly split the total number of seconds into hours, minutes, and seconds. 
// However, it might not give the right results if movieLength is negative, a decimal, or not a number at all. As explained on MDN Docs, the remainder operator keeps the same sign as the left number, so if the input is negative, you would get negative remainders - which wouldn't make sense when showing time

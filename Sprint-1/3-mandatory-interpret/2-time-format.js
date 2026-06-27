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

// the answers to the questions above:
// a) there are 6 variable declarations in this program. you can identify them by the const keyword. they are:
//    - const movieLength = 8784;
//    - const remainingSeconds = movieLength % 60;
//    - const totalMinutes = (movieLength - remainingSeconds) / 60;
//    - const remainingMinutes = totalMinutes % 60;
//    - const totalHours = (totalMinutes - remainingMinutes) / 60;
//    - const result = \${totalHours}:${remainingMinutes}:${remainingSeconds}`;
// 
// b) there is only 1 function call in this program. it is 
//    - console.log(result); (Calling the log function of the console object).
// c) According to the MDN documentation, the % operator is the Remainder operator.
//     In the expression movieLength % 60, it divides the total number of seconds (movieLength) by 60 and returns whatever is left over. 
//     Because there are 60 seconds in a minute, this expression isolates the leftover seconds that don't cleanly fit into a whole minute. 
//     For 8784, $8784 \div 60 = 146$ with a remainder of 24.
// d)  This expression calculates the total, clean number of minutes in the movie.
//     By subtracting remainingSeconds from movieLength, it rounds the total seconds down to a number perfectly divisible by 60.
//     Dividing that result by 60 converts those seconds into minutes.For 8784 seconds: $(8784 - 24) / 60 = 8760 / 60 = 146$ minutes.
// e) The variable result represents the total length of the movie formatted as a string in the format "hours:minutes:seconds".
//    A better name for this variable could be formattedMovieLength or movieDurationFormatted to make it more descriptive.
// f)  No, it will not work perfectly for all values. Here is why:
//      - Negative Numbers: If movieLength is negative (e.g., -500), the remainder operator in JavaScript retains the sign of the dividend. You would end up with negative strings like 0:-8:-20.
//      - Formatting/Padding Issues: If any of the time units are less than 10, they won't have a leading zero. For example, if a movie is exactly 1 hour and 5 minutes long, this code will output 1:5:0 instead of a standard digital clock format like 01:05:00.
//      - Non-Integers: If movieLength is a decimal (like 8784.5), the math will break down and pass decimals into your minutes and hours, resulting in a messy string.
//      - Tip: To make this bulletproof for all positive integers, you would typically use String.prototype.padStart(2, '0') to ensure the minutes and seconds always show up as two digits (e.g., 05 instead of 5).
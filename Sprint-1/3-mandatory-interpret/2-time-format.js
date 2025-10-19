const movieLength = 100000; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
/*
There are 6 variable declarations in this program.
They are on the following lines:
Line 1: const movieLength = 8784; // length of movie in seconds
Line 3: const remainingSeconds = movieLength % 60;      
Line 4: const totalMinutes = (movieLength - remainingSeconds) / 60;
Line 6: const remainingMinutes = totalMinutes % 60; 
Line 7: const totalHours = (totalMinutes - remainingMinutes) / 60;
Line 9: const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
 */
// b) How many function calls are there?
/*
There is 1 function call in this program.
It is on the following line:
Line 10: console.log(result);
*/

// Consider: Why do we say this is a function call? What is being passed to the function as an argument?
/*
 A function call is when a function is invoked or executed. In this case, the function being called is console.log, which is a built-in function in JavaScript that outputs a message to the console. The argument being passed to the function is the variable 'result', which contains the formatted string representing the movie length in hours, minutes, and seconds.
The value being passed to the console.log() function as an argument is the final calculated and formatted string stored in the result variable.
*/

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression movieLength % 60 calculates the remainder when the value of movieLength (which is in seconds) is divided by 60. This operation is known as the modulus operator (%). In this context, it is used to determine the number of seconds that are left over after converting the total movie length into full minutes. Since there are 60 seconds in a minute, this expression effectively gives us the remaining seconds that do not make up a full minute.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression assigned to totalMinutes is (movieLength - remainingSeconds) / 60. This expression first subtracts the remaining seconds (calculated in line 3) from the total movie length in seconds (movieLength). This gives the total number of seconds that can be fully converted into minutes. Then, this result is divided by 60, since there are 60 seconds in a minute. The final result is the total number of full minutes in the movie length, excluding any leftover seconds.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the formatted string that shows the movie length in hours, minutes, and seconds. A better name for this variable could be formattedMovieLength or movieDurationFormatted, as these names more clearly indicate that the variable contains a formatted representation of the movie's duration.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
/*  
Test 1-- movieLength = 5 | result = 0:0:5
Test 2-- movieLength = 3725 | result = 1:2:5
Test 3-- movieLength = 100000 | result = 27:46:40
A - (In the first two examples above, the code is returning the 'result' without zero padding for single digit hours, minutes & seconds. 
The typical time format requires zero padding for single digit h/m/s - (e.g., "1:2:5" should be "01:02:05"). 
B - (In the third example above, the code correctly returned the result as 27:46:40 which is more than 24 hours which is the standard number of hours in a clock. 
This may result in unhandled exception as the number of hours is above 24.)
Based on the above, my opinion is that this code does not work as well as it could do for all values of movieLength.
*/

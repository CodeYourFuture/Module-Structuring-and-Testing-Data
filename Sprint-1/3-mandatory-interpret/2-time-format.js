const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
/*
There are 6 variable declarations in this program:
1. movieLength
2. remainingSeconds
3. totalMinutes
4. remainingMinutes
5. totalHours
6. result
*/

// b) How many function calls are there?
/*
There appears to be only 1 function call in this program:
1. console.log() on line 10, which is a method of the console object.
*/

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
/*
The expression movieLength & 60 is an expression that uses the variable movieLength, an operator caled the modulus operator (%) and a number, 60. The value of movieLength is taken from the declared variable at the top of the script (namely 8784), the modulus operator returns the remainder of a number after it has been divided by another number, in this instance it returns any remainder when 8784 has been divided by 60. Therefore movieLength % 60 returns 24, which is the remainder when 8784 is divided by 60 (146 with 24 remaining). The comment next to the declared variable movieLength states that it is the length of a movie in seconds, so this expression is used to find out how many seconds are left after converting the total movie length into minutes (as there are 60 seconds in a minute).
*/

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/*
The expression assigned to the totalMinutes variable is (movieLength - remainingSeconds) / 60. As JavaScript follows order of operations (the exact order in which to do math steps in an expression), any expression in parentheses will always come first. Therefore in thid expression, the value of remainingSeconds variable (24) is subtracted from the value of the movie length (8784). The total of that subtraction is then divided by 60, and so the value assigned to totalMinutes is 146. This expression calculates the total number of complete minutes in the movie, ignoring the remaining seconds.
*/

// e) What do you think the variable result represents? Can you think of a better name for this variable?
/*
The variable result represents the total length of the movie in hours, minutes and seconds in other words a hh:mm:ss format. A better name for this variable could be formattedMovieLength, as this describes the value of that variable more accurately. The word "result" is a very vague term and does not give any indication of what the variable actually represents.
*/

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
/*
I experimented with various values and received the following results when changing the value of movieLength 1. movieLength = 900, result was "0:15:0" (0 hours, 15 minutes, 0 seconds)
2. movieLength = -3600, result was "-1:0:0" (negative 1 hour, 0 minutes, 0 seconds)
3. movieLength = 0, result was "0:0:0" (0 hours, 0 minutes, 0 seconds)
4. movieLength = -457.93, result was "0:-7:-37.93000000000001" (negative 7 minutes, negative 37.93 seconds)
5. movieLength = true, result was "0:0:1" (0 hours, 0 minutes, 1 second)
6. movieLength = "movie", result was "NaN:Nan:Nan" (not a number, not a number, not a number)
This code does provide returned values however as you can see from the list above, it does not give expected or meaningful results for all values of movieLength. For example, negative values, boolean values and string values do not return meaningful results. The code is designed to work with positive integer values representing the length of a movie in seconds, so although we will receive a result for other variations of values in movieLength, they will not be meaningful or useful
*/

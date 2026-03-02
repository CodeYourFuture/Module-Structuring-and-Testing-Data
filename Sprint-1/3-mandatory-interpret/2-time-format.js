const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

/**
 * There are five variable declarations. Here are:
 * movieLength
 * remainingSeconds
 * totalMinutes
 * remainingMinutes
 * totalHours
 */

// b) How many function calls are there?

/**
 * There is one function call: console.log(result).
 */

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

/**
 * Based on the provided documentation from MDN, I can explain what the expression `movieLength % 60` represents. According to the "Arithmetic operators" section of the MDN document linked, the `%` operator is the "Remainder operator".
 It returns the remainder left over when one operand (the left one, `movieLength`) is divided by a second operand (the right one, `60`).
In the context of the code:
 `movieLength` stores a duration in seconds (8784).
 Dividing `8784` by `60` tells how many whole minutes are in that duration, however it doesn't divide evenly all the time.
 `movieLength % 60` specifically calculates the leftover seconds that do not form a full minute. 
 Based on the example of 8784 seconds:
    8784 ÷ 60 = 146 minutes with a remainder.
    60 * 146 = 8760 seconds.
    8784 - 8760 = 24 seconds.
    Therefore, this expression correctly isolates the seconds component of the total time duration, which is then stored in the `remainingSeconds` variable.
 */

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

/**
 * Line 4 is const totalMinutes = (movieLength - remainingSeconds) / 60;.
 *
 * This expression first subtracts the remainingSeconds from the total movieLength. 
 * This results in a number of seconds that is perfectly divisible by 60. 
 * Then, it divides that number by 60 to convert it into the total number of whole minutes represented by the movie's length.
 */

// e) What do you think the variable result represents? Can you think of a better name for this variable?

/**
 * The result variable represents the movie's length formatted as a string in the traditional hours:minutes:seconds format (e.g., "2:26:24" for a movie length of 8784 seconds).
 * A better, more descriptive name for this variable would be formattedDuration or timeString. This makes its 
 * purpose clearer to anyone reading the code.
 */

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

/**
 * This code will work for all non-negative integer values of movieLength, but the output format might not always be the most appropriate. Here's the reason::

 * For very short movies (e.g., 45 seconds): It will output "0:0:45". The hours and minutes are shown as single digits, which is technically correct but not the typical "00:00:45" format often expected.
 * For durations with zero seconds (e.g., 3600 seconds = 1 hour): It will output "1:0:0".
 * Potential problem: If movieLength were a negative number or not a number (e.g., a string), the code would either produce a negative time or result in an error like NaN (Not-a-Number), which wouldn't make sense. 
 * The code assumes the input is a valid positive number of seconds.
 */

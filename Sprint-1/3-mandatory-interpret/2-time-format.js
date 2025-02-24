const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions
// a) How many variable declarations are there in this program?
/* There are 6 variable declarations:
movieLength
remainingSeconds
totalMinutes
remainingMinutes
totalHours
result*/
// b) How many function calls are there?
/* There is 1 function call:
console.log(result);
Note that operators like % or substring() are methods, but 
only console.log is a standalone function call here.*/
// c) Using documentation, explain what the expression movieLength % 60 represents
/*The % operator is the remainder operator. The expression movieLength % 60 calculates the remainder 
when movieLength is divided by 60. This remainder represents the leftover seconds that do not 
complete a full minute. For example, if movieLength is 8784 seconds, then 8784 % 60 gives the
 number of seconds remaining after extracting all full minutes 
(i.e., 8784 divided by 60 leaves a remainder that represents the seconds). */ 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/* Subtracts the remaining seconds (remainingSeconds) from the total seconds (movieLength).
 This ensures that only the seconds that form complete minutes are considered.
Divides by 60 to convert those seconds into minutes.
so, totalMinutes represents the total number of whole minutes in the movie length.*/
// e) What do you think the variable result represents? Can you think of a better name for this variable?
/*The variable result represents a formatted time string in the format hours:minutes:seconds (e.g., "2:15:30"). 
A better name for this variable could be formattedTime, durationString, or formattedDuration. These names more 
clearly indicate that the variable holds a formatted representation of time. */
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
/*This code isn’t designed to handle negative numbers or non-integer inputs. 
These cases might produce unexpected results.*/
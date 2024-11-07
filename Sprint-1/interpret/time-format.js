const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
/*   There are 6 variable declarations:

Line 1: const movieLength = 8784;
Line 3: const remainingSeconds = movieLength % 60;
Line 4: const totalMinutes = (movieLength - remainingSeconds) / 60;
Line 6: const remainingMinutes = totalMinutes % 60;
Line 7: const totalHours = (totalMinutes - remainingMinutes) / 60;
Line 9: const result = ${totalHours}:${remainingMinutes}:${remainingSeconds};
*/


// b) How many function calls are there?
/* There is 1 function call in this program:

Line 10: console.log(result)
*/


// c) Using documentation, explain what the expression movieLength % 60 represents
/*  The expression movieLength % 60 uses the modulus operator (%), 
which returns the remainder when movieLength is divided by 60. 
This calculation is commonly used to isolate the remaining seconds 
when converting seconds to a hours:minutes:seconds format. 
Specifically, movieLength % 60 gives the number of seconds left over 
after accounting for complete minutes.
*/


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/*  The expression assigned to totalMinutes calculates the total number of complete minutes 
in movieLength by removing the leftover seconds (remainingSeconds) 
and then dividing the result by 60. This gives the number of minutes contained within the total 
seconds of movieLength, disregarding the seconds.
*/


// e) What do you think the variable result represents? Can you think of a better name for this variable?
/*  The variable result represents the formatted time in hours:minutes:seconds 
format that corresponds to the total length of the movie in hours, minutes, and seconds.

A better name for this variable could be:
 - formattedTime, 
 - timeString, 
 - or movieDurationFormatted (to more clearly indicate that it is the movie's duration formatted as a string.)
*/

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
/* This code will work for most values of movieLength, 
but it will not handle values less than 0 (negative values), 
as those would result in negative times which may not be intended for formatting.

However, for positive values, the code accurately converts seconds to the hours:minutes:seconds format. 
If movieLength is greater than or equal to zero, it will produce the correct time breakdown. 
Negative input would require additional handling to either prevent it or adjust the time format 
accordingly.
*/

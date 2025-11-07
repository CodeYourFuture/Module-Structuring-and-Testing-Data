const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
/*there are six variable declarations in this program:
1. movieLength
2. remainingSeconds
3. totalMinutes
4. remainingMinutes
5. totalHours
6. result
*/

// b) How many function calls are there?

        /*There are 1 function calls in this code. in console.log(result);.*/

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

        /*The % operator in JavaScript is the remainder operator. It divides the left-hand number by the right-hand number and returns the remainder.

        So in this case:

        movieLength % 60

        divides movieLength (8784) by 60 and gives the remaining seconds, which is 24.*/


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

        /*The expression

        totalMinutes = (movieLength - remainingSeconds) / 60;

        subtracts the leftover seconds from the total seconds so that we get a whole number of minutes. 
        Then it divides by 60 to convert seconds into minutes without any decimal part.*/


// e) What do you think the variable result represents? Can you think of a better name for this variable?
        /*The variable result represents the length of the movie in the format hours:minutes:seconds.

        A better name could be something like:

        movieDurationFormatted

        formattedDuration

        movieLengthHMS (HMS = hours, minutes, seconds)*/

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer,
        /*Yes, it works for all non-negative values:

        If the movie is less than an hour, totalHours is 0, so we get 0:MM:SS.

        If the movie is less than a minute, both totalHours and remainingMinutes are 0, so we get 0:0:SS.

        For larger movies, it correctly calculates hours, minutes, and seconds.

        The only exception would be negative values, which aren’t realistic for a movie length.*/
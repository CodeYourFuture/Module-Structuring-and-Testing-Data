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
1.Line 1 : const movieLength.
2.Line 3 : const remainingSeconds.
3.Line 4 : const totalMinutes.
4.Line 6 : const remainingMinutes.
5.Line 7 : const totalHours.
6.Line 9 : const result.   
*/

// b) How many function calls are there?

/* There is one function call:
Line 10 : console.log().
*/

// c) Using documentation, explain what the expression movieLength % 60 represents

/* The movieLength represents the length of the movie in seconds, the operand % is remaining (Modulo) returns the remaining of the movieLength divided by 60(to convert sec into minutes) but it only gives the remaining of this operation.
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

/*
The expression assigned to completed total minutes of the movie, by subtract the movie length in sec from the remaining seconds and divide the result by 60 to convert it to minutes
*/

// e) What do you think the variable result represents? Can you think of a better name for this variable?

/*
 The variable result display the total length of the movie in these form (Hours:Minutes:seconds) in string format.

 I can think of "MovieDuration" as a better name because it gives more description to the output. 
*/

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

/*
I did experimenting the code by putting different value to the movieLength and it works just fine.

test numbers and its outcomes:
1. 36000sec>> 10:0:0
2. 120 sec >> 0:2:0
3. 0 sec >> 0:0:0
4. 555555.55sec >> 154:19:15.550000000046566

As the results show the code is working fine even with unexpected large numbers.
*/

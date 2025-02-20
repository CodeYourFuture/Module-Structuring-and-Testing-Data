const movieLength = 5000; //8784; // length of movie in seconds

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


/* 
a) There are 6 variable declarations in the program: lines 1, 3, 4, 6, 7 and 9

b) One function call in line 10

c) The remainder (%) operator returns the remainder left over after division
movieLength % 60: movieLength is the total number of seconds in the movie.
movieLength % 60(movieLength is the dividend while 60 is the divisor) gives the remaining seconds after removing full minutes
movieLength = 8784:
8784 ÷ 60 = 146 remainder 24
So, movieLength % 60 = 24. Therefore, the movie has 24 seconds left after removing full minutes

d) The expression total minutes calculates the total number of full minutes in the movie
 The expression: movieLength - remainingSeconds, removes the seconds left that don't make a full minute
 which is 8784 - 24 = 8760 (only full minutes)
While the expression: / 60, converts seconds to minutes
which is 8760 / 60 = 146 (and this means 146 full minutes)

e) The variable result creates a time string which represents the movie duration in HH:MM:SS format
A better name would be time

f) Yes, the code works for all values of movie length.
It converts the length of movie in seconds to hours, minutes and seconds
for example, when 30seconds was used as the movieLength the output was 0:030
when 200 was used, the result was 0:3:20
when 60seconds was used, it was 0:1:0 and the output for 5000 seconds was 1:23:20
This shows that the code works for all values of movie length.
*/

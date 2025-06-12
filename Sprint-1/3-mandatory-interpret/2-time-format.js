const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
1. There are 5 const variable declarations:
1. movieLength
2. remainingSeconds
3. totalMinutes
4. remainingMinutes
5. totalHours
6. result
So, it's 6 in total.
// b) How many function calls are there?
A; There are 2 function calls:
1. console.log(result)
2. The template literal uses no function calls itself — all other operations (%, /, -) are operators, not function calls.
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
A; movieLength % 60 gives the remainder when movieLength is divided by 60.
That means it gives the number of seconds left after accounting for full minutes.
For example: 8784 % 60 = 24;  So there are 24 leftover seconds.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
A; const totalMinutes = (movieLength - remainingSeconds) / 60;
This subtracts the seconds that don’t fit into a full minute (the remainder), then divides by 60 to get the total number of full minutes in the movie.
It's equivalent to: totalMinutes = Math.floor(movieLength / 60)
But done manually.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
A; result is the formatted time in hours:minutes:seconds.
A better name would be something like:
1. formattedTime.
2. timeString.
3. movieDurationFormatted.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
A; It works for positive integer values of movieLength.
However, possible issues:
1. If movieLength is not a multiple of 60, it’s okay.
2. If movieLength is less than 60, it will still work — just shows 0:0:x.
3. Edge case: If movieLength is negative, it will produce incorrect output.
4. Leading zeros: The output will be like 2:3:9 instead of 02:03:09. If you're formatting for display, you'll want to pad with zeros using String().padStart(2, '0').


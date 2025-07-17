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

/* SOLUTION

a) **How many variable declarations are there in this program?**  
There are **5** variable declarations: `movieLength`, `remainingSeconds`, `totalMinutes`, `remainingMinutes`, `totalHours`, and `result`.

b) **How many function calls are there?**  
- The template literal uses `${...}` expressions, but these are not function calls.  
- The only function call is `console.log(result);`.  
So, there is **1** function call.

c) **Using documentation, explain what the expression `movieLength % 60` represents**  
The `%` operator returns the remainder after dividing `movieLength` by `60`. In this context, it gives the number of seconds left after converting as many full minutes 
as possible from the total seconds.

d) **Interpret line 4, what does the expression assigned to `totalMinutes` mean?**  
`(movieLength - remainingSeconds) / 60` subtracts the leftover seconds from the total, then divides by 60 to get the total number of complete minutes in the movie.

e) **What do you think the variable `result` represents? Can you think of a better name for this variable?**  
`result` represents the movie length formatted as `hours:minutes:seconds`. A better name could be `formattedTime` or `movieLengthHMS`.

f) **Try experimenting with different values of `movieLength`. Will this code work for all values of `movieLength`? Explain your answer**  
The code works for positive integer values of `movieLength`. However, for values less than 60, `totalHours` and `remainingMinutes` will be `0`, which is correct. 
For negative or non-integer values, the output may not make sense. Also, the output does not pad single-digit minutes or seconds with a leading zero (e.g., `1:2:3` instead of `01:02:03`). 



















*/

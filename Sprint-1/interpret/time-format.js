const movieLength = "ывыв"; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

/* Total 6 (six):
const movieLength
const remainingSeconds
const totalMinutes
const remainingMinutes
const totalHours
const result
 */

// b) How many function calls are there?

/* Taking into account the string formatting with `$`, 
there are 4 in total:
line 9: $ 3(three) times
line 10: log
 */

// c) Using documentation, explain what the expression movieLength % 60 represents

/* The expression `movieLength % 60` uses the modulo operator (`%`) 
to calculate the remainder when `movieLength` 
(representing a movie's length in minutes) is divided by 60.

In context:

- `movieLength % 60` represents the number of remaining minutes 
after dividing the total movie length by 60 
(since there are 60 minutes in an hour).
  
For example, if `movieLength` is 125 minutes:

1. Dividing 125 by 60 gives 2 with a remainder of 5.
2. `movieLength % 60` would then be `5`, meaning the movie is 
2 hours and 5 minutes long.

This expression is useful for converting total minutes 
into an hours-and-minutes format, where `movieLength // 60` 
(integer division) gives the hours, and `movieLength % 60` 
gives the remaining minutes.
 */

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

/* from the total number of seconds, we subtract 
the resulting number of seconds of the last minute 
and divide the result by 60. In this way, 
we get the exact number of minutes contained 
in the total number of seconds. Analog of the `//` operator
 */

// e) What do you think the variable result represents? Can you think of a better name for this variable?

/* I think the result variable is a formatted HH:MM:SS 
string by converting the total seconds.

I would suggest the following naming options:
movieLengthInString
movieLengthFomatted
movieLengthFomattedString
movieLengthHHMMSS
 */

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

/* this code works with any values, even if they are specified 
as a string, for example "125". This happens because JS 
uses implicit type conversion. In our case, to a number, 
since these are arithmetic expressions. If the argument 
of one of the expressions cannot be converted to a number, 
we will get the resulting string as a result: NaN:NaN:NaN

But there will be no critical program termination, 
as for example in strongly typed languages, such as Java */
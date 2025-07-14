const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//    There are 6 variable declarations in this program. These are: `movieLength`, `remainingSeconds`, `totalMinutes`, `remainingMinutes`, `totalHours`, and `result`.

// b) How many function calls are there?
//    There is 1 function call in this program: `console.log(result)`.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//    The expression `movieLength % 60` uses the modulo operator (`%`). According to the Mozilla Developer Network documentation, the modulo operator returns the remainder of the division of one operand by a second operand. In this specific case, `movieLength % 60` calculates the remainder when `movieLength` (which is in seconds) is divided by 60. This effectively gives us the number of seconds that are left over after converting as many full minutes as possible from the total `movieLength`.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//    Line 4: `const totalMinutes = (movieLength - remainingSeconds) / 60;`
//    This expression calculates the total number of whole minutes contained within `movieLength`. It first subtracts `remainingSeconds` (which are the seconds that don't make up a full minute) from the `movieLength`. This leaves only the seconds that form complete minutes. This value is then divided by 60 to convert these seconds into a total count of minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//    The variable `result` represents the `movieLength` converted and formatted into a string showing hours, minutes, and seconds, in the format `HH:MM:SS`.
//    A better name for this variable could be `formattedMovieDuration` or `movieDurationString` as it more clearly indicates its purpose and data type.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//    This code will work for positive integer values of `movieLength`.
//    If `movieLength` is 0, the result will be "0:0:0", which is correct.
//    If `movieLength` is a negative number, the modulo operator will return a negative remainder (e.g., -8784 % 60 would be -24). This would lead to negative values for `remainingSeconds`, `remainingMinutes`, and `totalHours`, which might not be the desired behaviour for a duration.
//    If `movieLength` is a floating-point number, the calculations involving the modulo operator and division might lead to unexpected or imprecise results due to floating-point arithmetic, as durations are typically represented by whole numbers of seconds.
//    Therefore, while it handles positive integers well, it's not robust for negative or non-integer `movieLength` values if a strictly positive, whole number output is expected for each component of the duration.

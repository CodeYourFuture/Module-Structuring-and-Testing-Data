
const movieLength = 8777; // length of movie in seconds
if (typeof movieLength !== "number") {
  throw new Error("Movie length must be a number"); // Checks if it’s a number ==> prevents strings, null, undefined;
} else if (movieLength < 0) {
  throw new Error("Movie length cannot be negative"); // Checks if it’s negative;
} else if(!Number.isSafeInteger(movieLength)) {
  throw new Error("Movie length is too large"); // Checks if it’s too large ==> prevents unsafe numbers in JS;
}

let safeMovieLength = Math.floor(Number(movieLength)); // Creates clean and positive integer;

const remainingSeconds = safeMovieLength % 60;
const totalMinutes = (safeMovieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const movieDuration = `${String(totalHours).padStart(2, "0")}:${String(remainingMinutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
console.log(`The movie length is --> ${movieDuration}`);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
    // we have 6 (const) variable declarations.

// b) How many function calls are there?
    // ===> we have only one, which is console.log() on line 10.
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

    // The % operator gives the remainder after dividing two numbers.
    // We divide the total seconds (movieLength) by 60 to see how many full minutes there are. Also the % operator gives the leftover seconds that do not make a full minute, this is what movieLength % 60 expression represents.
   
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
    // ===> First we remove the leftover seconds that don’t make a full minute. Then we divide the remaining seconds by 60 to find how many full minutes there are. For example, 8724 seconds minus 24 leftover seconds gives 8700 seconds, and 8700 / 60 = 145 minutes. So totalMinutes = 145;

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    // ===> The result variable is a string and represents the movie length format in Hour, minutes and seconds.
    // ===> A better name can be " movieDuration or movieLengthFormat". and I replaced the result with movieDuration.


// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
    // ===> As I changed the value of the movieLength the results has changed too.It means this code works with any value.

    // ===> Response to PR review question: Can you see any problem if we were to name it movieLength?
    // We should not name the result variable movieLength because that name is already used for the total seconds. Using the same name would cause an error or confusion. It’s better to choose a new name like movieDuration or movieLengthFormat.

// Respond to question: "There are a few cases that might break this. Can you spot and mention a few?"

// ===> A few cases might break this code:
// If movieLength is negative, we could get negative hours, minutes, or seconds.
// If movieLength is not an integer, the minutes or hours could have decimals.
// Very large values might not display nicely without padding.
// Single-digit minutes or seconds are not padded (like 5 instead of 05).
// If movieLength is not a number, the calculations will fail.”   */

// to solve the edge cases, we need to write some more lines of code. Which I did add in above codes with comments.
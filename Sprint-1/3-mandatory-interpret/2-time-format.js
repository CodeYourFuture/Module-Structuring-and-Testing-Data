const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);
console.log(remainingSeconds)

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

    // There are 6 variable declarations

// b) How many function calls are there?

    // There is 1 function call

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

    // % is a remainder operator.
    // movieLength % 60 represents the remainder when 8784/60 is calculated, which is 24 seconds

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

    // The expression is calculating the total number of minutes in the movie length
    // It does this by subtracting the remaining seconds from the total movie length, and then dividing it by 60

// e) What do you think the variable result represents? Can you think of a better name for this variable?

    // The result represents the movie length in hours:minutes:seconds
    // A better name could be hoursMinutesSeconds or movieLengthFormatted

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

    // The code will only work for positive integers
    // if the value is 0 or negative, the code will not make sense
    // if the value is a decimal, the code will give float results
    // if the value is not a number, the code will give an error
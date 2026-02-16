const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
    // There  are 6 Variable declarations.

// b) How many function calls are there?
    // There is only one function call.

// c) Using documentation, explain what the expression movieLength % 60 represents
     // The % (modulus) operator returns the remainder after division.
// movieLength % 60 calculates the remainder after dividing the total
// number of seconds by 60. This gives the remaining seconds after converting the total seconds 
// into complete minutes.
// For example, 8784 % 60 = 24, meaning there are 24 seconds left over.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
   //It first subtracts the leftover seconds (remainingSeconds) to get only the seconds that form complete minutes, then divides 
   //by 60 to convert those seconds into minutes.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
   //  The variable result represents the movie length formatted as hours,
   // minutes, and seconds in the format "HH:MM:SS".
   // It combines totalHours, remainingMinutes, and remainingSeconds into
   // a readable time string.
   // A better variable name could be formattedTime or movieDuration,
   // because it clearly describes that the value is a formatted time.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
    // The code works correctly for positive integers but has limitations:
    //Works: Positive integers (e.g., 8784 → "2:26:24"), zero (0 → "0:0:0")
    //Issues: 
    // Negative numbers produce negative times
    // Decimals work but give decimal seconds
    // No zero-padding (65 seconds gives "0:1:5" instead of "0:01:05")
    //The mathematical logic is sound for non-negative whole numbers, but the code lacks 
    //input validation and proper time formatting with leading zeros.
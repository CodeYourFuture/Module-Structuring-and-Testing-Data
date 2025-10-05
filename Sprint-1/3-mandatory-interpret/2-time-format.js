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


 // Answers:

// a) Variable Declarations: 5
// movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result

// b) Function Calls: 1
// console.log()

// c) movieLength % 60
//The modulo operator returns the remainder after division
// This calculates the remaining seconds that don't make a full minute

// d) Line 4: totalMinutes calculation
// Removes the leftover seconds, then divides by 60 to convert total seconds to minutes
// Result: Total minutes in the movie

// e) result variable
// Represents the movie length formatted as HH:MM:SS
// Better name: formattedDuration or movieDuration

// f) Testing different values
// ✅ Works for: 3600 (1:00:00), 3661 (1:01:01), 65 (0:01:05)
// ❌ Issue with: Single-digit minutes/seconds (e.g., 3610 shows 1:10 instead of 1:01:10)
// Problem: Missing leading zeros for values < 10

// Output: 2:26:24 (2 hours, 26 minutes, 24 seconds)
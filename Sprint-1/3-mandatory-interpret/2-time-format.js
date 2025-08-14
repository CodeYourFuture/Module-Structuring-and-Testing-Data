const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//  There are six variable declarations, namely movieLength, remainingSeconds, totalMinutes, 
//  remainingMinutes, totalHours and result.

// b) How many function calls are there?
//    Only one function call: console.log(result);
//    And Operators like % and / perform calculations, 
//    but they are not function calls.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// % is the remainder operator. It returns the amount left over after dividing one number by another.
// So movieLength % 60 gives the number of seconds remaining after full minutes have been removed — 
// in other words, the leftover seconds.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//   (const totalMinutes = (movieLength - remainingSeconds) / 60;). 
//    First, it subtracts the extra seconds (remainingSeconds) to get a value evenly divisible by 60. 
//    Then, it divides that by 60 to convert the remaining seconds into full minutes.
//    In short: It calculates how many complete minutes fit into movieLength.
//    
// e) What do you think the variable result represents? Can you think of a better name for this variable?
//   result holds the formatted time‑code string produced by the template literal: "hours:minutes:seconds".
//   Perhaps formattedTime?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//   No, not for all values, but works for positive integers.
//   It will have issues with: Negative numbers → incorrect or unexpected output
//   Non-numbers (e.g., strings) → results in NaN
//   Decimal values → may produce fractional time units
//   Very large values → works, but hours may go beyond 24
//   No zero-padding → time format not standard (2:6:4 instead of 02:06:04)
//   Can't work for all values because the code assumes that movieLength is a
//   positive whole number (integer) — specifically, a number of seconds.
//   If the input is anything else (like negative numbers, decimals, text, etc.),
//   the math still runs, but:
//   It may not make sense (e.g. negative time?).
//   It may break formatting (NaN, unexpected decimals).
//   It may display badly (like 2:6:4 instead of 02:06:04).


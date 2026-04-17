const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//ANS: There are 6 variable declarations.
//movieLength
//remainingSeconds
//totalMinutes
//remainingMinutes
//totalHours
//result

// b) How many function calls are there?
//ANS: One explicit function call:
//  console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

//ANS: The % symbol is the Remainder Operator, according to the documentation, it returns the remainder left over when one operand is divided by a second operand.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

//ANS:
//This expression calculates the total number of whole minutes contained within the movieLength.
//(movieLength - remainingSeconds): This subtracts the "leftover" seconds so that the number is perfectly divisible by 60.

// The   / 60: This divides that  number by 60 to convert the unit from seconds to minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//ANS: The result variable represents the duration of the movie formatted as a timestamp (HH:MM:SS).
//Better names for this variable:
//formattedDuration
//MovieTimestamp
//timeString

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//ANS: Mathematically: It will work for any positive number.
//It does not handle padding. If remainingSeconds is 5, the output will look like 2:26:5. Standard timestamps expect two digits (e.g., 2:26:05).
//If movieLength is a negative number or a non-number (like a string), the math will result in NaN (Not a Number) or unexpected logic.

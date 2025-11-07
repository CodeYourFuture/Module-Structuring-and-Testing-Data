const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// Each const introduces a new variable.
// 
// movieLength
// remainingSeconds
// totalMinutes
// remainingMinutes
// totalHours
// result
// Total variable declarations: 6

// b) How many function calls are there?

// The only function call is:

// Total function calls: 1
// console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// According to the MDN documentation on the remainder (%) operator
// The remainder operator returns the remainder left over when one operand is divided by a second operand.
// So:
// movieLength % 60
// means “the remainder when movieLength is divided by 60.”
// Interpretation:
// It gives you the remaining seconds that don’t make up a full minute.
// For example, if the movie length were 125 seconds:
// 125 % 60 = 5, so there are 5 seconds left over after 2 full minutes.
// Purpose: Extract the leftover seconds after converting total seconds into minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// const totalMinutes = (movieLength - remainingSeconds) / 60;
// This line:
// Subtracts the leftover seconds (that couldn’t form a full minute).

// Divides the remaining seconds by 60.
// Meaning:
// Converts the total movie length into minutes, ignoring any incomplete minute.
// So it gives the total number of full minutes in the movie.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;

// This combines hours, minutes, and seconds into a single string formatted like H:M:S.
// Example output: "2:26:24"
// Meaning: It represents the formatted time duration of the movie.
// Better variable names:
// formattedDuration
// timeString
// movieTime
// durationInHMS

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// It will work correctly for most positive integers, since it’s just converting seconds into hours, minutes, and seconds using division and remainders.
// However, there are some edge cases:
// If movieLength = 0:
// Output: 0:0:0 ✅ Works fine.
// If movieLength < 60 (less than a minute):
// Works fine (e.g., 45 → 0:0:45).
// If movieLength is not an integer (e.g., 87.5):
// Still works, but decimals might appear in remainingSeconds.
// If movieLength is negative:
// The logic breaks — you’d get negative time components ❌.
// Formatting issue:

// The output isn’t padded.
// Example: 2 hours, 5 minutes, 9 seconds → "2:5:9" instead of "02:05:09".
// (Can fix that with .padStart(2, '0') on each component.)

// Summary:
// It works for positive whole numbers, but for negative or non-integer inputs, or if you need formatted time, adjustments are needed.


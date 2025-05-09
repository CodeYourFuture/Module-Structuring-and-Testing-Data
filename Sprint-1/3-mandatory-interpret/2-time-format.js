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


// --- CODE STARTS HERE ---

const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// --- QUESTIONS & ANSWERS ---

// a) How many variable declarations are there in this program?
// Answer:
// There are 5 variable declarations:
// 1. movieLength
// 2. remainingSeconds
// 3. totalMinutes
// 4. remainingMinutes
// 5. totalHours
// 6. result
// (So actually: **6** variable declarations using `const`)

// b) How many function calls are there?
// Answer:
// Only 1 function call: `console.log(result);`

// c) Using documentation, explain what the expression movieLength % 60 represents
// Answer:
// The `%` operator returns the **remainder** after division.
// So `movieLength % 60` gives the number of **remaining seconds** after dividing the total seconds by 60.
// In this case, it isolates the seconds that don’t fit into full minutes.
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#remainder

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Answer:
// `(movieLength - remainingSeconds) / 60` calculates how many **full minutes** are in the movie.
// It first subtracts the leftover seconds, then divides by 60 to convert the rest into minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Answer:
// `result` represents the **converted movie length in HH:MM:SS format** (hours:minutes:seconds).
// A better name would be: `formattedTime`, `formattedDuration`, or `movieTimeFormatted` — more descriptive and readable.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Answer:
// Yes, this code will work for all **non-negative integer** values of `movieLength` (in seconds).
// However:
// - If movieLength is **less than 60**, it will display `0:0:seconds`
// - It doesn’t add leading zeroes (e.g., `1:3:4` instead of `01:03:04`), so formatting could be improved for better readability.
// - If `movieLength` is a **negative number**, it still runs but the output won't make logical sense for a duration.
// So it works functionally, but you may want to add validation and zero-padding for a more polished version.

const movieLength = 3600; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//  6 variable declarations

// b) How many function calls are there?
// 1 function

// c) Using documentation, explain what the expression movieLength % 60 represents
// The remainder (%) operator returns the remainder left over when one operand is divided by a second operand.
// If movieLength is 8784 seconds, movieLength % 60 returns 24, indicating that 24 seconds remain after calculating full minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It calculates the total minutes in movieLength, excluding seconds that do not complete a full minute.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// It represents the formatted time duration of the movie in HH:MM:SS format, in my opinion better name for this variable is "formattedTime"

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// This code will work for most positive values but it may not format correctly if movieLength is less than 60 or movieLength is exactly 3600 or a multiple of 3600

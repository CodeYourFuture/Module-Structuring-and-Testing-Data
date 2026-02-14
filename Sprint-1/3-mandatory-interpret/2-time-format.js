const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6. (6 Const in this case)

// b) How many function calls are there?
// 1, the last console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// movieLength % 60 represents the seconds/minutes left over after you divide the total seconds/minutes by 60

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// This expression calculates the total number of whole minutes in the movie.
// It subtracts the "leftover" seconds so you have a number perfectly divisible by 60.
// It divides by 60 to convert seconds into minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the formatted time string in HH:MM:SS (Hours:Minutes:Seconds) format.
// A better name for it could be movieLengthFormatted.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// If the seconds are a single digit like "5", the result will look something like 2:26:5. It makes it look unprofessional compared to say 02:26:05.
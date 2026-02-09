const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// a) How many variable declarations are there in this program?
// Declarations are lines that use const or let
// const movieLength
// const remainingSeconds
// const totalMinutes
// const remainingMinutes
// const totalHours
// const result
// My answer: 6 variable declarations

// b) How many function calls are there?
// A function call uses parentheses like something(..)
// console.log(result) is a function call
// My answer: 1 function call

// c) Using documentation, explain what the expression movieLength % 60 represents
// % is the remainder operator
// movieLength % 60 gives the leftover seconds after dividing by 60
// (the seconds part that doesn't make a full minute)
// Answer: it represents the remaining seconds

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// totalMinutes = (movieLength - remainingSeconds) / 60
// First it removes the leftover seconds so we have an exact number of seconds that fits into whole minutes
// Then it divides by 60 to convert seconds into minutes
// Answer: it calculates the total whole minutes in the movie

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// result is a string that formats the time as hours:minutes:seconds
// Better name: formattedTime or movieDuration

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// It works for normal positive numbers (seconds) like 8784
// It will also run for 0 (gives 0:0:0)
// But negative values would produce negative hours/minutes/seconds, which isn't a real time format
// So it assumes movieLength is a non-negative number


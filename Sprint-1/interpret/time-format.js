const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const MovieLengthHourMinSec = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(MovieLengthHourMinSec);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 5 variable declarations with const
// const movieLength
// const remainingSeconds
// const totalMinutes
// const totalHours
// const MovieLengthHourMinSec


// b) How many function calls are there?
// console.log(MovieLengthHourMinSec);

// c) Using documentation, explain what the expression movieLength % 60 represents
// the sign % represents a remainder, so the expression movieLength % 60 gives a numerical value of seconds left

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// the expression means the total of minutes by calculating movie length in hours minus seconds devided by minutes  const totalMinutes = (movieLength - remainingSeconds) / 60;

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// it gives the exact running time of a move hours:minutes:seconds. variable name MovieLengthHourMinSec
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

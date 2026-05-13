const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6

// b) How many function calls are there?
// 1

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// It's modulo.  In this case, it gives the remainder of seconds after one gets the number of minutes by dividing by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It avoids using floor division, so it's more comprehensible to beginners, by subtracting the remaining seconds from the film length.  The it divides by 60 to get hours.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// It shows the time in hours, minutes and seconds.  You could call it timeHoursMinsSecs

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// It wouldn't work well if the user typed the answer as a string.  The input is unlikely to be negative or run over a day or have a user finnicky enough to state seconds with a decimal.  It might look nicer if it was padded with zeros.

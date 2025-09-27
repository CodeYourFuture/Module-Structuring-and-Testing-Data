const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
6: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result.

// b) How many function calls are there?
Only 1 ; console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
% gives the leftover after dividing, so movieLength % 60 = extra seconds

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
(movieLength - remainingSeconds)/60 → takes away seconds, then gets whole minutes


// e) What do you think the variable result represents? Can you think of a better name for this variable?
It’s the time of the movie written as hours:minutes:seconds. A better name could be movieTime or formattedTime.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
works for normal numbers, but long movies or single-digit mins/secs look weird
const movieLength = 5.345345; // length of movie in seconds

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

// % is a modulus operator
// It acts as a divisor, but instead of returning the resultant division, it returns the remainder
// So movieLength % 60 divides the movieLength into whole minutes and returns however many seconds remain 

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// It is giving the total number of minutes of the movieLength to the nearest whole number (rounded down)
// It does this by finding removing the remainder of seconds from the total movie length to give the largest
// movieLength in seconds that is still exactly divisible by 60, then dividing by 60 to give it in minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// It looks to return a string that breaks the movie length into hours, minutes and seconds that is easier to read/understand
// (at least for a human)
// a better variable name may be something like formattedTime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// Yes
// The code is using basic mathematical operators, it works even with extremely small or large numbers, it works with 0, it even
// works with negative numbers, although that is a little nonsensical, it may be better to return an error or undefined in that case
// For very large numbers it would return a high number of hours, which one may want to then convert to days, or have a max limit
// It all depends on what the use case for the code is
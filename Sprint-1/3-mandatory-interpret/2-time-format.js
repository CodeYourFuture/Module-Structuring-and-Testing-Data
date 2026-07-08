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

/*
a) There are 6: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result.
b) There is one: console.log.
c) It is taking the movieLength and doing a remainder that is showing what is left after the vaule has been divided, in this case wil be 84.
    I found the info here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder 
d) It is removing any extra seconds from the division by 60 so that is is showing as whole numbers without decimals.
e) Result is showing the movies duration but broken down to hours:minutes:seconds, I think it should be movieDuration to help describe it better.
f) Yes, it does work to show the lenght even if it is only in one section, though it does show values of 0, could clean it up to show nothing.
*/
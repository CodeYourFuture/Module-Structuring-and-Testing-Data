const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// six variable declarations: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result.
// b) How many function calls are there?
// only one fuction call: console.log() in line 10.
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// the expression movieLength % 60 is using the modulus operator (%) to find the remainder when movieLength is divided by 60.  
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// the expression assigned to totalMinutes is calculating the total number of minutes in the movie by subtracting the remaining seconds from the total movie length in seconds and then dividing the result by 60 to convert it to minutes.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// the variable result represents the formatted string of the movie length in hours, minutes, and seconds. a better name for this variable could be formattedMovieLength or movieDurationFormatted.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// yes, this code will work for all values of movieLength as long as it is a non-negative integer representing the length of the movie in seconds. the code correctly calculates the hours, minutes, and seconds for any given length of time in seconds.
const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6 variable declarations: Line 1,3,4,6,7,9

// b) How many function calls are there?
// 1 function call → console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//In this program, movieLength % 60 is used to extract the remaining seconds after calculating the total number of complete minutes in the movie.
//The expression movieLength % 60 uses the modulus operator (%) to compute the remainder when movieLength (in seconds) is divided by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//const totalMinutes = (movieLength - remainingSeconds) / 60;-The expression (movieLength - remainingSeconds) / 60 calculates the total number of complete minutes in the movie, excluding any leftover seconds.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//The variable result represents the formatted time of the movie in the (hours:minutes:seconds)format.Represents the total duration of the movie
//Better name: movieTime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//For small and medium-sized movie lengths, the code works well- converting seconds to a properly formatted HH:MM:SS string.
//For negative movieLength values, the code could give incorrect results-If movieLength is negative (e.g., -1000), the modulus (%) operator and division will still function mathematically, but the results may not make sense in the context of time.
//If movieLength is extremely large, like movieLength = 99999999 seconds, the code will still work, but the output will be impractical 
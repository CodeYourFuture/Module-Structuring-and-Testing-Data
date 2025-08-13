const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result); // Output: "2:26:24"

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in this program.

// b) How many function calls are there?
// There is 1 function call in this program: console.log(result); 

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression movieLength % 60 calculates the remainder when movieLength is divided by 60.
// This is used to find the remaining seconds after converting the total movie length from seconds to minutes.
// It gives the number of seconds that do not fit into complete minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Line 4 calculates the total number of minutes in the movie by subtracting the remaining seconds from the total movie length
// and then dividing by 60. It converts the total movie length from seconds to minutes, and thus gives the total minutes in the movie.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the formatted time of the movie in the format "hours:minutes:seconds".
// A better name for this variable could be `movieDuration`, which more clearly indicates that it holds the duration of the movie in a specific format.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes, this code will work for all values of movieLength. It will correctly calculate the hours, minutes, and seconds
// regardless of the total length of the movie in seconds. The calculations are based on the modulus operator and division,
// which will always yield valid results for any non-negative integer value of movieLength.

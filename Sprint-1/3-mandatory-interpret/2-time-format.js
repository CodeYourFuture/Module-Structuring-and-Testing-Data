const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//There are six variable declarations :
//Line 1 => const movieLength = 8784; // length of movie in seconds
//Line 3 => const remainingSeconds = movieLength % 60;
//Line 4 => const totalMinutes = (movieLength - remainingSeconds) / 60;
//Line 6 => const remainingMinutes = totalMinutes % 60;
//Line 7 => const totalHours = (totalMinutes - remainingMinutes) / 60;
//Line 9 => const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;

// b) How many function calls are there?
// One => console.log()

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//The % symbol is the modulo operator.the modulo operator returns the remainder of a division. 
//So, movieLength % 60 calculates the remainder when movieLength is divided by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//Lets brake it down:
// First => (movieLength - remainingSeconds) First, it subtracts the remaining seconds from the total movie length to get the 
// remaining time in seconds that represents full minutes.
//Next /60 => Next, it divides the remaining seconds by 60 to convert the result into full minutes.
// totalMinutes => represents the total number of full minutes in the movie, excluding the remaining seconds.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//The variable result represents the time format of the movie, in hours, minutes, and seconds in the format HH:MM:SS
// Result as a variable name dose not describe really well what this variable actually stores a better name would be:
// movieTimeFormat or movieDuration

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// The current output for this code when  movieLength = 8784; is => 2:26:24
// lets say  movieLength = 0; the output => 0:0:0 although the output is correct it's not informative or useful or possible 
// for any movie to exist without any screen time that would = 0.
// lets say movieLength = -320; the output => 0:-5:-20 the output dose not make sense because we got negative minutes and seconds 
// and this dose not represent a valid movie time duration.
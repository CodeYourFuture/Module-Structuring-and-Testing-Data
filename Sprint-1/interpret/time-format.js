const movieLength = -19; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// There are 6 variable declarations in this program

// b) How many function calls are there?

// 1 function call which is console.log()

// c) Using documentation, explain what the expression movieLength % 60 represents
//  The  remainder (%) operator returns a remainder when one operand divides by second operand. In this case it returns remaining seconds.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// In order to find the total Minutes, we subtract the total length of the movie in seconds from the remaining seconds and then divide it by 60.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

//The result represent the length of the movie  in hours, minutes and in seconds. The name Running_Time would be better variable name as it highlights the lengthOfFilm

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// yes it will work with all interger and floating point value.

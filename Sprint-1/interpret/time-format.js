const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program? 6 variable

// b) How many function calls are there? There are no function calls

// c) Using documentation, explain what the expression movieLength % 60 represents - movieLength % 60 is using the modulo operator (%) to calculate the remainder when movieLength is divided by 60

// d) Interpret line 4, what does the expression assigned to totalMinutes mean? - subtracts the remaining seconds from the total movie length in seconds then divides the result of the subtraction by 60

// e) What do you think the variable result represents? Can you think of a better name for this variable? - represents the formatted string that displays the movie length in hours, minutes, and seconds.  A more descriptive name will be fine

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer - The code breaks down the total movie length into hours, minutes, and seconds using modulo and division operations

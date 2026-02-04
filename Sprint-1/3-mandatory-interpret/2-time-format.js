const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
        // There are 6 variable declarations

// b) How many function calls are there?
        // There are no function calls except console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
        // 'movieLength % 60' finds out the remainder seconds which is 24

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
        // It subtracts the remaining seconds from movieLength and finally divides by 60 to get the length in minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?
        // It stores the total movie length in HH:MM:SS format.
        // I can name it totalRuntime;

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
        // Yes, the code works for all values. 6000 would be 1:40:0, for example

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

// answer

// a) 6 variables: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours and result

// b) 1 function calls: console.log(result)

// c) Reminder operator: movieLength (8784 seconds)is divided by 60 and converted into minutes. The reminder value then stored as seconds.

// d) It calculates how many full minutes (60 seconds) in movieLength are there excluding the seconds. 

// e) total movie length in hours, minuets and seconds. movieDuration can be an alternative variable. 

// f) I tried negative and decimal number. The code works but it doesn't make any sense to represent with this type of values other than integers.
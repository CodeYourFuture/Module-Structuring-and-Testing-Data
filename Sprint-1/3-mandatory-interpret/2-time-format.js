const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declaration. "line1, line3, line4, line6, line7, line9"

// b) How many function calls are there?
// There is only one function call in this program "console.log(result);"

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// % is called remainder. There fore movieLength % 60 represents the remainder of the movie length after dividing by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// totalMinutes are calculated by subtracting the remaining seconds from movie length and divided by 60 to get full minutes. this helps to get a number which divided by 60 with out reminder.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// result represents the total length of the movie in the form of Hour: minute: second
// moveDurationFormatted can be a better name to replace result. 

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes it works for all value. the only thing that is concerning is the validation of movieLength as the negative integer also gives value which is unrealistic. 

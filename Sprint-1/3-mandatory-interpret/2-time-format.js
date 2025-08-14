const movieLength = 1000; // length of movie in seconds

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

//Answers:
//a) There are 6 variable declarations( movieLength; remainingSeconds;remainingMinutes; result;totalMinutes; totalHours;)
//b) There is one function call in this program, which is console.log(result);
//c) It represents the movie length in seconds after dividing the total seconds into full minutes. It uses the module operator(%) to find the remainder.
//d) We defined the variable using const totalMinutes then we assigned with movieLength - remainingSeconds with the division operator .After calculating,
// we get the output in full minutes.
//e) the variable result represents the totalHours,remainingMinutes and remainingSeconds. A better name could be displayTime.
//f)Technically, it does handle the codes using the correct format that is HH:MM:SS
// for example, if the movieLength is 500 seconds, the format will still be displayed correctly as 0:8:20.But if we use a negative number, it will
// mess up the format.


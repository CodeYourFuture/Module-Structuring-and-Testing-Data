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
//a) There are 4 variable declarations( movielength; remainingSeconds;remainingMinutes; result)
//b) There are 4 function calls(movieLength - remainingSeconds /60;);(totalMinutes - remainingMinutes) / 60;${totalHours}:${remainingMinutes}:${remainingSeconds}`
// and console.log(result));
//c) It represents the movie length in hours with the remainder minutes left using the remaineder operator(%)
//d) We defined the variable using const totalMinutes then we assigned with movieLengtg - remainingSeconds with the division operator .After calculating,
// we get the output in full minutes.
//e) the variable result represents the totalHours,rmainingMinutes and remainingSeconds. A better name could be displayTime.
//f)Technically, it does handle the codes using the correct format that is HH:MM:SS


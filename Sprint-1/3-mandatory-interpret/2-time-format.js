const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program? 
  //Answer: 6


// b) How many function calls are there?
   //Answer: 1


// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
   //Answer: % is the modulus operator and movieLength % 60 gives the remainder when movieLength is divided by 60.


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
   //Answer: movieLength - remainingSeconds → subtracts the leftover seconds, leaving only the total number of seconds that make full minutes
   //Dividing by 60 converts those seconds to total whole minutes So totalMinutes is the total minutes in the movie ignoring leftover seconds


// e) What do you think the variable result represents? Can you think of a better name for this variable?
   //Answer: result is a string representing the movie length in HH:MM:SS format and better name MovieTimeFormat


// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
   //Answer: It  just works for positive integer

const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
There are 6 variable declarations in this program.
    movieLength
remainingSeconds
totalMinutes
remainingMinutes
totalHours
result

// b) How many function calls are there?
There is 1 function call in this program.
    console.log(result)
// The function call is on line 10, where we are calling the console.log function to print the value of result to the console.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// % is the remainder after dividing movielenth by 60. It gives us the number of seconds that are left over after we have taken out all the whole minutes from the movie length



// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// first remove the extra seconds.
// then divide by 60 to get the total number of minutes in the movie length.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the formatted time in hours:minutes:seconds format.
// A better name for this varibale could be formattedTime.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// no, this code will not work good for all values of movielength.
// it will only right for postitive whole number of seconds.
// if movieLength is nagatuve or not a whole number, the result will not be right.
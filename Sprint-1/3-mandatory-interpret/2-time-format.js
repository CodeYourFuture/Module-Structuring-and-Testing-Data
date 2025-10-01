const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// There are 6 variable declaration, they are: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result

// b) How many function calls are there?

//There is only one function call, the console.log() in line 10

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

//movieLength % 60 is the remainder of the division of movieLength by 60 i.e it provides the remaining seconds when movieLength is converted to minutes through the use of the modulus operator % that returns the remainder of a division

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// totalMinutes is the total number of full minutes in the movie length , calculated by first removing the remaining seconds then dividing by 60 to convert to minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// result represents the movie length in hours:minutes:seconds format. It would be better to name it formattedMovieLength or movieLengthHMS

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// Yes the code will work for all values of movieLength, because the use of a variable makes it so that the code can be reused for any value of movieLength

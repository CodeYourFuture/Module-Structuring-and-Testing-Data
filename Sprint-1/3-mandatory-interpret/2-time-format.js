const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
    // there are 6 variable declarations in this program. 

// b) How many function calls are there?
    // there is 1 function call in this program, which is the console.log().

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
    // The expression movieLength % 60 represents the remainder of the division of movieLength by 60. 
    // In this case, it calculates the number of seconds remaining after converting the total movie length from seconds to minutes.
    //  The modulo operator (%) returns the remainder of a division operation, so it helps to determine how many seconds are left after accounting for full minutes in the movie length.
    // this means 8784 seconds is exactly 146 minutes and 24 seconds.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
    // The expression assigned to totalMinutes will return the total number of minutes only leaving the seconds out.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    // the variable holds the hour,minutes and seconds a movie is long, so i prefer to name it movieDuration.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
    // yes, this code will work for all values of movieLength because every attributes of the movieLength variable is being calculated and converted to hours, minutes and seconds.
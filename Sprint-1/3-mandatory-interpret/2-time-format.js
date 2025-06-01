const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
     // There is 6 variable declarations in this program.
// b) How many function calls are there?
    // There is one function call (console.log)


// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
   //movieLength % 60 gives a total of minutes remaining after dividing 8784 (movieLenght) by 60 
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
   //In line 4 calulates the movie lenght in minutes by taking the movieLength (8784) minus remainingSeconds (24) 
   //and dividing it by 60. 
// e) What do you think the variable result represents? Can you think of a better name for this variable?
    //Result represents the length of the movie in hh:mm:ss format, maybe formattedMovieLength would be a better name.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
     //This code works for all values because it correctly converts any number of seconds into hours, minutes, and seconds using 
     // modular arithmetic.
const movieLength = 8784; // length of movie in seconds
// 
const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;
// 
const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;
// 
const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
    //  5 variable declarations:

// b) How many function calls are there?
//    1 function called

// c) Using documentation, explain what the expression movieLength % 60 represents
     // The remainder (%) operator returns the remainder 
     // so is divide movieLength by 60 and return the remainder."
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
   //First, it takes away the extra seconds that don't make up a full minute. 
   // Then, it divides the remaining seconds by 60 to figure out how many complete minutes are in the movie.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    // formattedTime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
   // Yes  but not all  ,because It handles converting seconds into minutes and hours using integer division and modulus.But with negative  integers dose not work correcly
//    And does not pad single-digit values with zeroes as wll, It will return something like 2:4:7 instead of 02:04:07, which is not a standard time format.

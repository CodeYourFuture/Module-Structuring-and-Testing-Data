const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program? 6 in total 
     // (movieLength, reamingSeconds, totalMinutes, remainingMinutes, totalHours, result)

// b) How many function calls are there?
     // Only console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
    //This expression calculates the remainder when movieLength is divided by 60 

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
   // This expression calculates the total number of complete minutes in the movie, excluding any leftover seconds (24)

// e) What do you think the variable result represents? Can you think of a better name for this variable?
   // The formatted duration of the movie, converted from total seconds into a standard time format (hh:mm:ss).
   // better name for the variable: formattedTime
    
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
   // Yes, the code works correctly for all non-negative movieLength values. But for better robustness, consider:

    // Adding input validation for negative values

    //Formatting the result with leading zeroes for readability
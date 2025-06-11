const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
     //there are 6 variable declartions
      //const movieLength = 8784;                  
         //const remainingSeconds = movieLength % 60; 
         //const totalMinutes = (movieLength - remainingSeconds) / 60; 
        //const remainingMinutes = totalMinutes % 60; 
//const totalHours = (totalMinutes - remainingMinutes) / 60;  
//const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;

// b) How many function calls are there?
   //console.log(result); is the only function call.



// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

   /*
The expression movieLength % 60 uses the variable movieLength, the modulus operator (%), and the number 60. 
The value of movieLength is taken from the variable declared at the top of the script (8784). 
The modulus operator (%) returns the remainder after dividing one number by another. 
In this case, it returns the remainder when 8784 is divided by 60. 
Therefore, movieLength % 60 returns 24, which is the remainder after dividing 8784 by 60 (which equals 146 with 24 left over). 
Since movieLength represents the length of a movie in seconds, this expression calculates how many seconds remain after converting the total length into full minutes (because there are 60 seconds in a minute).
*/


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
   /*
The expression assigned to the variable totalMinutes is (movieLength - remainingSeconds) / 60. 
According to JavaScript's order of operations, expressions inside parentheses are evaluated first. 
Therefore, the value of remainingSeconds (24) is subtracted from movieLength (8784), resulting in 8760. 
This result is then divided by 60, yielding 146. 
This expression calculates the total number of whole minutes in the movie, excluding the leftover seconds.
*/


// e) What do you think the variable result represents? Can you think of a better name for this variable?

/*
The variable result represents the total length of the movie formatted as hours, minutes, and seconds (in HH:MM:SS format). 
A more descriptive name for this variable could be formattedMovieLength, as it clearly indicates that the value is a formatted representation of the movie length. 
The current name, "result," is too generic and does not convey the meaning or purpose of the variable effectively.
*/


// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
  // It will work for any non-negative integer value of movieLength and correctly converts seconds into a string showing hours, minutes, and seconds.
 //Note:-Note:Although the code executes without errors for negative values, the resulting output is not meaningful for representing time. Negative hours, minutes, and seconds do not correspond to a valid movie length.


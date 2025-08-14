const movieLength = 90.5; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions


// a) How many variable declarations are there in this program?
  // There are 6 variable declarations

// b) How many function calls are there?
  // There is only one function call which is console.log()

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

    //its a modulo operator. This gives us the remainder of the seconds after dividing the movie length by 60. This first converts the seconds to whole minutes
    //then if we takeaway those whole minutes from the total seconds. we get the remaining seconds.


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?


    //(movieLength - remainingSeconds)/60 first subtracts the remaining seconds from the movie length(which is in seconds )
    //then it divides it by 60, which gives us the whole minutes in the movie.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    //It represents a formatted form of the total duration of the movie. 
    //it can be renamed as formatted duration. 

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
    // works for positive numbers
    // works for negative numbers- but it gives time in negative too which doesn't make sense 
    // for very small numbers it gives hours and minutes in zeros.
    //for non-integers it gives value in decimals

//Mathmatically it works for most values but the results do not make sense.
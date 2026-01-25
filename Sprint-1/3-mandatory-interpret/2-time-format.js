const movieLength = 5; // length of movie in seconds

const remainingSeconds = movieLength % 60;   console.log(remainingSeconds);//24
const totalMinutes = (movieLength - remainingSeconds) / 60;
console.log(totalMinutes);//146 

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

    // There are six variable declarations in this program: 
    // movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result.

// b) How many function calls are there?

    //There is one function call in this program: console.log(result);
    //In JavaScript, a function call almost always involves parentheses () immediately following a name.  

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

    //the expression movielength % 60 calculates the remainder when movieLength is divided by 60.
    //this means this calculation 8784/60 = 146.4 but we are looking for the seconds
    //we take the integer part 146 * 60 = 8760 - 8784 = 24 seconds remaining


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

    // Line 4 calculates the total number of whole minutes in the movie length.
    // It subtracts the remaining seconds from the total movie length to get a value that is a multiple of 60,
    // and then divides that value by 60 to convert it from seconds to minutes.
    // So, it gives us the total number of complete minutes in the movie length.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

    //result stores the variables of totalHours, remainingMinutes and remainingSeconds in a string format readable time clock "H:M:S"
    //A better name for this variable could be MovieDuration

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer


    //Yes, this code will work for all values of movieLength as it correctly calculates hours, minutes, and seconds 
    //but if the movieLength is less than 5 seconds, will be 0:0:5, we need to use the padStart method to add leading zeros for better formatting.
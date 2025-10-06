const movieLength = -8784; // length of movie in seconds (8784)

const remainingSeconds = movieLength % 60;
//console.log(`Remaining Seconds:${remainingSeconds}`)
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
        //6
// b) How many function calls are there?
        //1
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
        // %-this is remaider operator that help us get remaining. In this case, dividing MovieLength % 60 returned 
        // remainder. It is not a typical mathematic division, it is division where we can get remainder.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
        // Means the subtraction remaider(second)  from the total length (in second) and divide by 60, because we need Minutes (1 min = 60 sec)
// e) What do you think the variable result represents? Can you think of a better name for this variable?
        //FormattedMovieTime
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
        //It works with a different values(negative and positive numbers).
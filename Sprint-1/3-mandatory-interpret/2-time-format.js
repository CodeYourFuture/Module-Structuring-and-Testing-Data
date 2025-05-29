const movieLength = 15780; // length of The Return of the King (extended edition, obvi) in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
        // 6

// b) How many function calls are there?
        // 4, console.log() once and 3 template literal evaluations 
        // I double checked that with Claude... is ${} really a function?! :O

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
        // % is the remainder operator
        // for example, 10%3 => 1, because 3 goes into 10 3 times, with 1 left over

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
        // movieLength % 60 => ignoring the number of seconds that make up whole minutes, how many seconds are left
        // movieLength - remainingSeconds => whole minutes represented in seconds
        // movieLength-remainingSeconds / 60 => number of whole minutes 

// e) What do you think the variable result represents? Can you think of a better name for this variable?
        // It contains the movieLength but in a more human readable format
        // Maybe call it movieLengthHMS?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer.
        // I tried it with a movieLength of 59 seconds, and it outputted 0:0:59
        // with movieLength 128549523578490254678919 it output 35708200994025070000:24:8
        // seems like it'll work with both very long and short movies

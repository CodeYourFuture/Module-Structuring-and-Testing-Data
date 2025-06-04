const movieLength = 732; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//There are 6 variable declarations in the program. Each is declared using the const keyword:
// 1, const movieLength = 8784;
// 2, const remainingSeconds = movieLength % 60;
// 3, const totalMinutes = (movieLength - remainingSeconds) / 60;
// 4, const remainingMinutes = totalMinutes % 60;
// 5, const totalHours = (totalMinutes - remainingMinutes) / 60;
// 6, const result = \${totalHours}:${remainingMinutes}:${remainingSeconds}`;`

// b) How many function calls are there?
// There is 1 function call in this program:

// console.log(result); → This is a call to the console.log() function, which outputs the value of result to the console.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//The expression movieLength % 60 uses the modulus operator %, which returns the remainder after dividing one number by another.
//It calculates how many seconds are left over after converting the total movieLength (in seconds) into whole minutes.
//So, if movieLength is 8784 seconds, 8784 % 60 gives 24, meaning 24 seconds remain after making as many full minutes as possible.
//Reference: MDN Docs - Modulus operator
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//Line 4 calculates the total number of full minutes in the movie length by subtracting the remaining seconds from the total seconds and then dividing by 60.
//const totalMinutes = (movieLength - remainingSeconds) / 60;
//This ensures that only complete minutes are counted, ignoring the leftover seconds.

//For example, if movieLength is 8784 seconds and remainingSeconds is 24, then:
//totalMinutes = (8784 - 24) / 60 = 8760 / 60 = 146 minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//The variable result represents the movie length formatted as a string in hh:mm:ss (hours, minutes, seconds) format.

//A better name for this variable could be:
//movieLengthFormatted
//This would make the purpose of the variable more clear when reading the code.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//Yes, the code works for various values of movieLength. For example:
        //When movieLength = 59, the result is 0:0:59, which is correct.
        //When movieLength = 732, the result is 0:12:12, which is also accurate.
//The code handles the conversion from seconds to hours, minutes, and seconds properly for different input values.


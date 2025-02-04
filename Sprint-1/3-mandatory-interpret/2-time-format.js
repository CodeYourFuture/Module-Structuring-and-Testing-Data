const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

/*
// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
    there is 6 variable declarations 

// b) How many function calls are there?
    there 0 function calls 

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
    The remainder (%) operator returns the remainder left over when one operand is divided by a
     second operand. It always takes the sign of the dividend.
    so the expression means we will take 8784 divided by 60 and the opreator % will get the remainder 


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
    const totalMinutes = (movieLength - remainingSeconds) / 60;
    First wewill take the movieLength "8784" and subtract the reaimingseconds "24" and then divided by 60 

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    the variable result reprsents the move length in hourse then minutes then second like this 2:26:24
    a better name would me detailedMoveLength

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
     Ive tried the code with different movieLength form negative numbers to postive number and zero they all 
     gave a correct answers , but the negative number does not make sence in the contex of movie length but for 
     8784 and -8784 it gave me a correct answer 2:26:24 and -2:-26:-24
*/
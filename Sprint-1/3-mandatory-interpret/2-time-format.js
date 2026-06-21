const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
 Six, the const with the functions inside.


// b) How many function calls are there?
4

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

It is called the remaining function, because if you use this function , you will use the remainingMinutes to divides 60 and get the remaining value .


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
It calls the variable movieLength and remainingSeconds and substract together and divide it 60.



// e) What do you think the variable result represents? Can you think of a better name for this variable?
I think it represents the total hour , remaining minutes and the remaining seconds .Duration is a better name



// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
yes
I tried to put 6(second), 60(1 minute), 3600(equivalent to 1 hour)




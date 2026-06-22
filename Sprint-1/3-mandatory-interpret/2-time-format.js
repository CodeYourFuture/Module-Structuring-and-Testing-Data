const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;



// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6 variables in total: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result  

// b) How many function calls are there?
// there are 3 function calls in line 4,7 and 9 

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// it means that the movie hour  is being calculated. totalminutes minus remainingseconds divided by 60.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// the variable result represents the total length of the movie in hours and minutes.
//Better name is MOvieTime.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes, this code will work for all values because it is using the modulus operator to calculate the remaining seconds and is using division to calculate the total hours. 
// The code will correctly handle any length of movie in seconds and convert it to the appropriate format.


const movieLength = 8784; // decaring length of movie in seconds

const remainingSeconds = movieLength % 60; // decalring the remaining seconds 
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 4 on lines : 1, 3 and 6 and 9


// b) How many function calls are there?
//2
// lines 4 and 7

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// uUses the operator "Reminder". divinfding the month lenth by 60 ( minutes) to get homw many second reminds in the month lengh= 
// 8784 / 60 = 146 minutes and remind 24 seconds letf


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// line 4 find how many  total minutes has in the month lenght. 
// first gets te toal seconds less the reminds sconds. it gives the results of total seconds and divides it 
//by the 60 ( minutes) = results homw many minutes has in the total lenght 
//8784 - 24 ==== 8760
// 8760 / 60 equals 146 minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// represents how long in time is the movie. could be caled= const timeMovie

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// i guess it wouldnt worrk for negative numbers but actualy evething envolves time is dificult to 
//my mind explain. I need to search for more simples expamples to associete this Reminder operetar in time.
// this was a dificult mind flows to me :(
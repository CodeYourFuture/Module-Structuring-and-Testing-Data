let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
 
// Ans: There are five (5) function calls, Line 4 Number() and replaceAll(), Line 5, Number() and replaceAll()
     // Line 10 log().   

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

//  Ans: The error is coming from line 5 "("," ""));"" a comma was missing. Putting a comma solved the problem.
                                                        
// c) Identify all the lines that are variable reassignment statements
 
// Ans: Line 4 carPrice and Line 5 priceAfterOneyear are variable reassignments.

// d) Identify all the lines that are variable declarations

//  Ans: 4 variable declaration Line 1, Line 2, Line 7 and Line 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// Ans: The purpose of the expression Number(carPrice.replaceAll(",","")) is to change a string argument the contains commas passed to replaceAll()
//   function into number, first the function replaceAll() removes the commas and then the function Number() changes it into number. 

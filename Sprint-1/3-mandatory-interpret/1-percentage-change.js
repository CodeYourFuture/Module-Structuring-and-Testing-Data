let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//ans- There are 5 function calls:
//replaceAll() is called two times, once in carPrice and another in PriceAfterOneYear, in line 4 and 5.
//Line 3: carPrice.replaceAll(",", "")
//Line 4: priceAfterOneYear.replaceAll(",", "")

// Number() is also called twice to convert in to the string, after replaceAll() is done into the numbers, in line 4 and 5.
//Line 3: Number(carPrice.replaceAll(",", ""))
//Line 4: Number(priceAfterOneYear.replaceAll(",", ""))

// console.log() is called to print the percentage change in line 10.
//Line 10: console.log(`The percentage change is ${percentageChange}`);


//priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
//console.log(`The percentage change is ${percentageChange}`);

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// ans: It was SyntaxError: missing ) which is replaceAll(",", "")comma separate argument. 

// c) Identify all the lines that are variable reassignment statements
// ans: carPrice = Number(carPrice.replaceAll(",", "")); 
//   priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

// d) Identify all the lines that are variable declarations
// ans: let carPrice = "10,000";
//      let priceAfterOneYear = "8,543";
//      const priceDifference = carPrice - priceAfterOneYear;
//      const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// ans: The expression Number(carPrice.replaceAll(",", "")) is used to convert a formatted string representation of a number (with commas) into an actual numeric value.
//Basically Number(carPrice.replaceAll(",","")) remove comma, convert strings in to number. 

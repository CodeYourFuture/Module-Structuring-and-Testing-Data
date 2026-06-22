let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
// console.log(carPrice)
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?



// a) There are 2 function calls in this code. replaceAll() in line 4 and 5 and console.log() in line 10

// b) There is a SyntaxError on line 5. The replaceAll() function takes 2 arguments 
// and this is missing a comma between the 2 arguments 

//c) line 4 & 5

// d) line 1,2 7 & 8

// e) It is replaces the comma "," in carPrice and removes any spaces so 
// everything becomes one string
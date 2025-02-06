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
//carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
//console.log(`The percentage change is ${percentageChange}`);

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// ans: It was SyntaxError: missing ) after argument list. 

// c) Identify all the lines that are variable reassignment statements
// ans: const priceDifference = carPrice - priceAfterOneYear;
//      const percentageChange = (priceDifference / carPrice) * 100;

// d) Identify all the lines that are variable declarations
// ans: let carPrice = "10,000";
//      let priceAfterOneYear = "8,543";
//      const priceDifference = carPrice - priceAfterOneYear;
//      const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// ans: It is value in string which is car price(10,000) and priceAfterOneYear(8,543), also replace and have new string value.
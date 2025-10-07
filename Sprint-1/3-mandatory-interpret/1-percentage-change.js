let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made : 
    //Answer : 5 functions 

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    //Answe: line 5 . we need a comma (,) between the arguments.puting (,) between ("," "")

// c) Identify all the lines that are variable reassignment statements :
    //Answe: line 4 and line 5

// d) Identify all the lines that are variable declarations
    //Answer: line 1, 2, 6, 7 

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    //Answer: Remove formatting commas from the price string and then convert it to a number so we can do arithmetic.

let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//Answer: replaceAll()=>lines 4&5
//        Number()=>lines 4&5

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//Answer: I fixed the error by adding a , in the replaceAll() function in line 5.

// c) Identify all the lines that are variable reassignment statements
//Answer: lines 4&5

// d) Identify all the lines that are variable declarations
//Answer: lines 1,2,7&8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//Answer: is used to convert a formatted price string (containing commas) into a numeric value that JavaScript can perform calculations with.

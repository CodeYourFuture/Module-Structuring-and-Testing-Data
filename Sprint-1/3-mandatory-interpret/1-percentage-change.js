let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?


// a) There are 5 function calls, Line 4 (Number(carPrice.replaceAll(",", ""))), Line 5 (Number(priceAfterOneYear.replaceAll(",", "")))
//    and Line 10(console.log())
// b) The error is coming form Line 5, it's due to missing a comma between the arguments of replaceAll, I have added the missing comma.
// c) Variable reassignment statements are in line 4 (carPrice ) and line 5 (priceAfterOneYear).
// d) Variable declarations are in: line 1 (let carPrice), line 2 (let priceAfterOneYear ), line 7(const priceDifference) and line 8(const percentageChange )
// e) Expression Number(carPrice.replaceAll(",","")) removes the comma from the string "10,000" making it "10000" so it can be used for calculations.
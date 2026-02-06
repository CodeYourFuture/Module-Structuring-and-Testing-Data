let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Answer: 5 in total (on lines 4, 5, and 10)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Prediction: it will generate an error. This is because the replaceAll function isn't syntactically correct as there is a comma separator missing
// After running: error identified on Line 5 (priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));)

// c) Identify all the lines that are variable reassignment statements
// Answer: Lines 4 and 5

// d) Identify all the lines that are variable declarations
// Answer: Lines 1, 2, 7, and 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Answer: It takes the string and replaces all instances of the comma "," with an empty space "". For example, the string "10,000,000"
// gets turned to "10000000"

let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls:
// Line 4: replaceAll(",", "") and Number()
// Line 5: replaceAll(",", "") and Number()
// Line 9: console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The original code on line 5 was: priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// This causes a SyntaxError because there is a missing comma between the two arguments of replaceAll().
// The original code had replaceAll("," "") but it should be replaceAll(",", "").
// The comma between "," and "" is needed to separate the two arguments of the function.
// The fix is simply adding the missing comma: replaceAll(",", "")

// c) Identify all the lines that are variable reassignment statements
// Lines 4 and 5 are variable reassignment statements (carPrice and priceAfterOneYear are reassigned using let).

// d) Identify all the lines that are variable declarations
// Lines 1, 2, 6, 7 are variable declarations (using let or const).

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// It removes all commas from the string "10,000" to get "10000",
// then converts that string into the number 10000 using Number().

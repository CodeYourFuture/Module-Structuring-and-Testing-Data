let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//line 4, line 5, line 10 so 2 unique function calls but 3 used in total

//There are three function calls in total: two replaceAll calls on lines 4 and 5, and one Number call in each line (lines 4 and 5). This means two unique function calls, replaceAll and Number, each used twice.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//error is from line 5. Needed to add a comma between the two separators
// c) Identify all the lines that are variable reassignment statements
//line 4 and 5 are reassignemnets of carPrice and priceAfterOneYear
// d) Identify all the lines that are variable declarations
//Line 1,2,7 and 8 are declarations using let or const as the keyword.
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//It is saying that all the places in the statement where there are commas (,) should be replaces with nothing

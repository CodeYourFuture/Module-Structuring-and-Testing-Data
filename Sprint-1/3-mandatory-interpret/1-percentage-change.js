let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below
//Line 4: replaceAll, Number
// Line 5: replaceAll, Number
// Line 8: console.log

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//Line number 5 because we used the method replace without comma between the two arguments . 
// we can fex it by adding a comma between the arguments

// c) Identify all the lines that are variable reassignment statements
//line number 4 and 5

// d) Identify all the lines that are variable declarations
// line number 1 , 2 , 7 and 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// We want to  convert the string(carPrice) into an integer but before that we have to take the comma off from it  so we used the method replace to remove it 

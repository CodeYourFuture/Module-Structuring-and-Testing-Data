let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There is 5 function calls, anything that has () afterwards is a function. 

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// I added a a comma , here --> (priceAfterOneYear.replaceAll(",", "")); as this was missing, I seen this as soon as i opened this exercise.

// c) Identify all the lines that are variable reassignment statements
// Lines 4 and 5 are reassignments, carPrice was declared with let and priceAfterOneYear was already declared with let.

// d) Identify all the lines that are variable declarations
// There is 4 declarations in total, theres where all varibales crated using let,const and var. (lines 1,2,7,8)

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// breaking it down this part, carPrice.replaceAll(",", "") removes all commas from the string. Next step is this Number("10000"), this converts the string into a number.
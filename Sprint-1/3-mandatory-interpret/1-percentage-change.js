let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    // line: 4 and line 5 and it is replaceAll().
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    // error is coming from line 5. The error is because of not putting comma between the inputs of replaceAll function. 
    // To fix the problem just add a comma between the inputs of replaceAll function.
// c) Identify all the lines that are variable reassignment statements
    // Line 4 and 5.
// d) Identify all the lines that are variable declarations
    // we have variable declarations at lines 1, 2, 7 and 8.
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    // the purpose of that expression is to turn into number the string and replace all commas  with an empty space.
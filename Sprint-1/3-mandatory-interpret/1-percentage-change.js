let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//Answer:function calls are 3-lines are:Number(carPrice.replaceAll(",", ""));
//Number(priceAfterOneYear.replaceAll("," ""));
//console.log(`The percentage change is ${percentageChange}`);
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//Answer:the problem is the syntax of  replaceAll method call line 5.The second argument (replacement string) is missing a comma between "," and "". The correct one is:replaceAll(",", "")
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements
//answer:Line 3: carPrice = Number(carPrice.replaceAll(",", ""));
//Line 4: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
//answer:Line 1: let carPrice = "10,000";
//Line 2: let priceAfterOneYear = "8,543";
//Line 6: const priceDifference = carPrice - priceAfterOneYear;
//Line 7: const percentageChange = (priceDifference / carPrice) * 100;


// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//This replaces all commas in the carPrice string with an empty string
//The Number(carPrice.replaceAll(",", "")) expression is used to remove commas and convert the string into a number.
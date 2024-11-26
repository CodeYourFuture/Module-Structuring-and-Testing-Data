let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?


// a) 1-carPrice = Number(carPrice.replace(",", ""));   2-priceAfterOneYear = Number(priceAfterOneYear.replace("," ""));
//       3- console.log(`The percentage change is ${percentageChange}`);

// b) there should be a ',' between the argument and the replacement
// comma was missing

// c) 1- carPrice   2-priceAfterOneYear

// d) 1-carPrice   2-priceDifference   3-priceDifference   4-percentageChange

// e) it will remove the ',' and make the number without ','


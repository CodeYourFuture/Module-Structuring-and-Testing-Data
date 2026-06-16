let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// there is 5 calls: 2* Number() 2* .replaceAll() AND 1* .log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// line 5 missing a comma: .replaceAll("," "")

// c) Identify all the lines that are variable reassignment statements
// line 4 carPrice and line 5 priceAfterOneYear

// d) Identify all the lines that are variable declarations
// line 1 carPrice and line 2 priceAfterOneYear 

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//the Number() function converts the string value into number - however we cannot convert comma we would need to replace this with the .replaceAll() method

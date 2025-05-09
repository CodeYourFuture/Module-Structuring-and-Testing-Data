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
a) carPrice.replaceAll(",", "")
priceAfterOneYear.replaceAll(",", "")
Number() 
console.log()
b)
 There's a missing comma after the first argument in replaceAll. It should be:
 priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
 c)
 carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
d)
let carPrice = "10,000";
let priceAfterOneYear = "8,543";
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;
e)
carPrice.replaceAll(",", ""): This part uses the replaceAll method to 
replace all occurrences of the comma (,) within the carPrice string with
 an empty string ("").  This  removes the comma from the 
 string "10,000", 
resulting in the string "10000".

Number(): The Number() function convert the string as Number
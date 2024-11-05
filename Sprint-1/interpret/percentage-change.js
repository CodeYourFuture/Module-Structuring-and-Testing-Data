let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made 
4 function call.carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
console.log(The percentage change is ${percentageChange});

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
Uncaught SyntaxError: missing ) after argument list...This is because the method replaceAll is not recognized as a valid function for the string object
fix :To ensure compatibility with older environments or browsers, you can use replace() with a global regular expression instead of replaceAll():
// c) Identify all the lines that are variable reassignment statements
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
// d) Identify all the lines that are variable declarations
let carPrice = "10,000";
let priceAfterOneYear = "8,543";
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
The expression Number(carPrice.replaceAll(",", "")):

Removes all commas from the string carPrice.
Converts the resulting string into a number so that it can be used in further calculations, such as price difference or percentage change.
This ensures that you can properly work with numeric values when performing calculations involving price values that might be formatted with commas.
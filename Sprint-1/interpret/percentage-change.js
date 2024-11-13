let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made (There are 3 function calls in this code, line 4 and 5, Number() is called twice)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem? (I didn't get any error: The percentage change is 14.57)

// c) Identify all the lines that are variable reassignment statements (line 4,5)

// d) Identify all the lines that are variable declarations (1,2,7,8)

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression? 
//(carPrice.replaceAll(",", ""): This takes the carPrice string which might contain commas and removes all of them using the replaceAll method.)
// Number() takes the string without commas and convert them into a number

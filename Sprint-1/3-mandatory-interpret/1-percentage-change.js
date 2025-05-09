let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//There are three function calls the first one in line 4 replaceAll() called on carPrice string => carPrice = Number(carPrice.replaceAll(",", ""));
//The second time in line 5 replaceAll() called on priceAfterOneYear string  => priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));
// The function Number() to convert all strings to numbers.
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//The error is coming from line 5 execution where it throws a SyntaxError: missing ) after argument list 
//Fix => by adding the missing colon "," => priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));
// c) Identify all the lines that are variable reassignment statements
// Line 4 => carPrice = Number(carPrice.replaceAll(",", ""));
//Line 5 => priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));
//Line 7 => const priceDifference = carPrice - priceAfterOneYear;
//Line 8 => const percentageChange = (priceDifference / carPrice) * 100;
// d) Identify all the lines that are variable declarations
//Line 1 => let carPrice = "10,000";
//Line 2 => let priceAfterOneYear = "8,543";
//line 7 => const priceDifference = carPrice - priceAfterOneYear;
//line 8 => const percentageChange = (priceDifference / carPrice) * 100;
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//carPrice.replaceAll(",", "") This part removes all commas from the string carPrice. The replaceAll() used to replace all coma's with nothing = ""
// carPrice = "10,000"; => carPrice ="10000" 
//then used the Number() function/method to convert strings to numbers => carPrice = "10000" => carPrice = 1000;
//The purpose of the expression is to convert a price that is in string type (with commas) into a number so that it can be used for mathematics operations,
//  such as calculating the price difference or percentage change.
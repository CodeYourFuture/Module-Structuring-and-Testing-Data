let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 4 fucntion calls 
  //Number(carPrice.replaceAll(",", "")); 2 calls Function Number and Function replaceAll
  //Number(priceAfterOneYear.replaceAll(",""")); 2 calls Function Number and Function replaceAll 
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// line 5 priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
//  ^^^SyntaxError: missing ) after argument list
// add semicolon after te the first argument  in the replaceAll method to fix the error
// c) Identify all the lines that are variable reassignment statements
//line 4 to varaible carprice //carPrice = Number(carPrice.replaceAll(",", ""));
//line 5 to variable priceAfterOneYear //priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

// d) Identify all the lines that are variable declarations
//line 1 to variable carPrice //let carPrice = "10,000";
//line 2 to variable priceAfterOneYear //let priceAfterOneYear = "8,543";
//line 7 to variable priceDifference //const priceDifference = carPrice - priceAfterOneYear;
//line 8 to variable percentageChange //const percentageChange = (priceDifference / carPrice) * 100;
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// it replace all the commas with empty string and convert the string to number.
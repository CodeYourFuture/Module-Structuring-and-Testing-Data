let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); //fixed code here

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made:
// There are 5 functions being called.
//1.Number(...)
//2.carPrice.replaceAll(",", "")
//3.Number(...)
//4.Number(priceAfterOneYear.replaceAll("," ""));
//5.Console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is in the line 5. its a syntax error with missing "," in .replaceAll("," ""));

// c) Identify all the lines that are variable reassignment statements

//carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));


// d) Identify all the lines that are variable declarations
//1.let carPrice = "10,000";
//2.let priceAfterOneYear = "8,543";
//3.const priceDifference =
//4.const percentageChange=


// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// This expression converts the string 10,000 into 10000 by eliminating commas through .replaceall. After this Number() converts it into a useable Number.
//It is important for it to be a Number so that we can use it in mathmatical calculations in further steps.



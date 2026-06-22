let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls in this file.
// Line 4 are being called the functions Number() and replaceAll()
// Line 5 are being called the functions Number() and replaceAll()
// Line 10 is being called console.log().Where console is an object log is the method and console.log() is the function call.


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is coming from line 5,it is throwing an error because the parameters of replaceAll() should be separated with ","  


// c) Identify all the lines that are variable reassignment statements
// Line 4,5


// d) Identify all the lines that are variable declarations
// Line 1,2,7,8


// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// replaceAll() replaces all "," in the string, than Number() converts the string into a number.

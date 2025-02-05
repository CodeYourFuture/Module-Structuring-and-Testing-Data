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

/*
a) There are 5 function call.carPrice =(carPrice.replaceAll(",", ""));
    Number(carPrice.replaceAll(",", ""));
    (priceAfterOneYear.replaceAll("," "")
    Number(priceAfterOneYear.replaceAll("," ""));
    console.log(`The percentage change is ${percentageChange}`);
    
b)  SyntaxError: missing ) after argument list. There is a missing , between two arguments in replaceAll()function.
    so it will be on line 5 Number(priceAfterOneYear.replaceAll("," ,""));

c)   carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));  are the two lines where variables are reassigned

d)  let carPrice = "10,000";
    let priceAfterOneYear = "8,543";
    const priceDifference = carPrice - priceAfterOneYear;
    const percentageChange = (priceDifference / carPrice) * 100; are variable declaration lines.

e) Number(carPrice.replaceAll(",","")) is  replacing , in variable carPrice and reassigning this new value to carPrice variable.  

*/
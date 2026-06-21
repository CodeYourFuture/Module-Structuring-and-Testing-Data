let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
There are 4 function calls here. There are two when you use Number();
 The other call is about console.log() to print the string out.
 When you call the variable (priceDifference/ carPrice), it is a function call. 
The last one is

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

It shows that I miss a ) parenthesis.


// c) Identify all the lines that are variable reassignment statements

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

// d) Identify all the lines that are variable declarations

let carPrice = "10,000";
let priceAfterOneYear = "8,543";

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what is the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

It deletes all the comma insides.I
The Number helps convert that string into an actual figure.




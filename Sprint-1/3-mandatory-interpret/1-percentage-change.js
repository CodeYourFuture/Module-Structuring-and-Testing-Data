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

//Answer
//a) line 4 has 2 function calls
    // line 5 has 2 function calls
    // line 10 has 1 function call
    //we have a total of 5 function calls in the above code 

//b) the error is happening in line 5 and it is happening because we are not separating the searchstring and the replacerstring with a comma
//c) line 4 and 5 are variable reassignment statements
//d) line 7 and 8 are variable declarations 
//e) The replaceAll function is removing the comma and the number function is coverting the string into a number which we can use to do arithmetic operations
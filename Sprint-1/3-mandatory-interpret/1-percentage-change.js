let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange} %`);

// Read the code and then answer the questions below



// a) How many function calls are there in this file? Write down all the lines where a function call is made

/*There are 5 function calls in total: two in the line, and another on in console log 

carPrice = Number(carPrice.replaceAll(",", ""));

and two in the line

priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

In each line, one function is nested inside the other, so both lines contain two function calls each.*/



// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?


/*priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
                                                        ^^^

SyntaxError: missing ) after argument list
the error is because a missing comma in the replaceAll method argument list
*/


// c) Identify all the lines that are variable reassignment statements



/*carPrice = Number(carPrice.replaceAll(",", ""));
 priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
 these two lines are variable reassignment statements because we are reassigning a new value to the existing variables carPrice and priceAfterOneYear.*/

// d) Identify all the lines that are variable declarations


/*let carPrice = "10,000"; 
let priceAfterOneYear = "8,543"; 
const priceDifference = carPrice - priceAfterOneYear; 
const percentageChange = (priceDifference / carPrice) * 100;

these four lines are variable declaration statements because we are declaring new variables:
carPrice, priceAfterOneYear, priceDifference and percentageChange using let and const keywords.*/



// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

/*first removes all commas from the string carPrice using replaceAll(",", ""), and then converts the resulting string into a number using Number().*/
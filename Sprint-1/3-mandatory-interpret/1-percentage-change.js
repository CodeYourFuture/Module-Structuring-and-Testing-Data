let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = priceDifference/carPrice*100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// There are one funtion call that is: const percentageChange = (priceDifference / carPrice) * 100;

//a) There are 4 function calls.For instance:Number(carPrice.replaceAll(",", ""));
                                         // Number(priceAfterOneYear.replaceAll("," ,""));
                                         //umber(priceAfterOneYear.replaceAll("," ,""));
                                         // console.log(`The percentage change is ${percentageChange}`);
 //b)The error is coming from line 5 with a missing comma. The problem is fixed by simply adding (,) .
 //c) variable reassignments are the following: carPrice and priceAfterOneYear.
 //d) variable declarations: let carPrice;let priceAfterOneYear;const priceDifference; const percentageChange; and finally console.log(percentageChange)
 //e) the expression Number(carPrice.replaceAll....) converts the carPrice from string into numeric value which is 10000.Its purpose to make sure that carPrice 
 // is a number to be used for mathematic calculations.Since numbers with commas are considered as strings we used the expression"replaceAll" to get a result.
                                 

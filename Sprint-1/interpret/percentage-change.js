let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
  //four functions
    //carPrice = Number(carPrice.replaceAll(",", ""));
    //priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
    //replaceAll(",", "")
    //replaceAll("," "")
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
   //line 5,the error is because of missing comma in replaceAll function
// c) Identify all the lines that are variable reassignment statements
  // const priceDifference = carPrice - priceAfterOneYear;
  // const percentageChange = (priceDifference / carPrice) * 100;
// d) Identify all the lines that are variable declarations
     // let carPrice = "10,000";
     // let priceAfterOneYear = "8,543";
     // const priceDifference = carPrice - priceAfterOneYear;
     // const percentageChange = (priceDifference / carPrice) * 100;
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
     //Number(carPrice.replaceAll(",","")) here ,It has two functions replaceAll() and Number 
     //replaceAll() function removes all "," 
     //Number function change the the string data to numeric
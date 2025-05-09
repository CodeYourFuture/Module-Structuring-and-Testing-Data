let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

/*
// Read the code and then answer the questions below

 a) How many function calls are there in this file? Write down all the lines where a function call is made

     There 5 function calls:
    1. carPrice = Number(carPrice.replaceAll(",", ""));
        a. number(  ) b.  .replaceAll
    2. priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
        a. number(  ) b. . replaceAll
    3. console.log(  )  
b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    1.
      SyntaxError: missing ) after argument list On line 5
      the error accrue because of the missing comma between the first argument and the second argument 
      we can fix it by adding a comma : (priceAfterOneYear.replaceAll("," , ""));

c) Identify all the lines that are variable reassignment statements
    lines number 4 and 5 

d) Identify all the lines that are variable declarations
    lines number 1 , 2 , 7and 8
    
e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
     first carPrice.replaceAll(",","") will replace the comma in the string 10,000 to 10000
     then number  ("10000") will convert the string "10000" to the number 10000 
     the purpose of this expression to convert the value of carePrice to a numeric value so we can use in the
      mathematical Operations without getting the error Not a number "NAN"

*/
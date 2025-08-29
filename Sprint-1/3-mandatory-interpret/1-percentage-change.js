let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
<<<<<<< Updated upstream
   // Line 4   carPrice.replaceAll(",", "") and Number(...)
   // Line 5   priceAfterOneYear.replaceAll(",", "") and Number(...)
   // Line 8   console.log(...) 
=======
     // 4 in total, see below 

         // carPrice.replaceAll(",", "")

        // Number(...) – using result of #1

        // priceAfterOneYear.replaceAll(",", "")

        // console.log(...)

>>>>>>> Stashed changes

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
   // Line 5   SyntaxError: Unexpected string 
   // replaceAll("," ""));  
   // it should be replaceAll(",", ""));

       // Line 5: If you want to pass those values as arguments to a function like replaceAll, 
                   //it must include the function name:

// c) Identify all the lines that are variable reassignment statements
<<<<<<< Updated upstream
   // Line 3 → carPrice = ...
   //Line 4 → priceAfterOneYear = ...

// d) Identify all the lines that are variable declarations
   //Line 1 → let carPrice = ...

   //Line 2 → let priceAfterOneYear = ...

   //Line 5 → const priceDifference = ...

   //Line 6 → const percentageChange = ...

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
   // Replaces all commas (",") with an empty string (""), effectively removing them  ("10,000" → "10000")
=======
       // Line 3: carPrice = ...
       // Line 4: priceAfterOneYear = ...

// d) Identify all the lines that are variable declarations
       // Line 1: let carPrice = "10,000";

      //Line 2: let priceAfterOneYear = "8,543";

      //Line 5: const priceDifference = ...;

      //Line 6: const percentageChange = ...;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    // The function replaceAll will find the caracter "," and will replace all of them with ""
>>>>>>> Stashed changes

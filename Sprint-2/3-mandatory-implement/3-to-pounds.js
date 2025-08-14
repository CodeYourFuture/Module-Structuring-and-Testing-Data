// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function toPounds(kilograms) {
    if (typeof kilograms !== 'number') {
      return "Invalid input: Please provide a number.";
    }
    const pounds = kilograms * 2.20462;
    return pounds;
  }
  
  // Example Usage and Testing:
  console.log(toPounds(10));     
  console.log(toPounds(5.5));    
  console.log(toPounds(0));      
  console.log(toPounds(-1));    
  console.log(toPounds("abc"));   
  
  let myWeightKg = 70;
  let myWeightPounds = toPounds(myWeightKg);
  console.log("My weight in pounds:", myWeightPounds);
  
  let itemWeightKg = 1.25;
  let itemWeightPounds = toPounds(itemWeightKg);
  console.log("Item weight in pounds:", itemWeightPounds);
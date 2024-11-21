// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(pounds){

    pounds = pounds.substring(
        0,
        pounds.length - 1
      );
      
      const paddedPenceNumberString = pounds.padStart(3, "0");
      pounds = paddedPenceNumberString.substring(
        0,
        paddedPenceNumberString.length - 2
      );
      
      const pence = paddedPenceNumberString
        .substring(paddedPenceNumberString.length - 2);
        
        return `£${pounds}.${pence}`;
}

console.log(toPounds("7099p"));
// Predict and explain first...

// Predict the output of the following code:
// =============> it is declaring num fisrt wich wil work but the function will stop after the 
//calculate 103 results. after run Return if the results.

// I din't predict rigt it gives the results all using the const Num= 103 

// the consolo.log wont work 

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// Explain why the output is the way it is
// =============> it is using the const 103 for all the results

// Finally, correct the code to fix the problem



function getLastDigit(numtoCalculate) { //give a input to the function to use 
  const num = numtoCalculate.toString().slice(-1); //declare a const adding values to what to do
  return num; // return the process
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

//output
// The last digit of 42 is 2
// The last digit of 105 is 5
// The last digit of 806 is 6
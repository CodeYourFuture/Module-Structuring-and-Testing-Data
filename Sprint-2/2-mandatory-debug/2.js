// Predict and explain first...
    //it won't work
// Predict the output of the following code:
// =============> Write your prediction here
    // I've just checked
//const num = 103;

//function getLastDigit() {
  //return num.toString().slice(-1);
//}

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here 
//    The last digit of 42 is 3
//    The last digit of 105 is 3
//    The last digit of 806 is 3
// Explain why the output is the way it is
// =============> write your explanation here
                // because of const num=103
// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.



function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Explain why getLastDigit is not working properly - correct the problem
              //function getLastDigit(num) - should be like that

// Predict and explain first...
    // The output will be 3 every time the function will be code.
    // It is correct that we passed different parameter each time we called the function
    // like in first time we passed 42 to the function but the we did not use it as 
    // we are using num value for each time we called the function

// Predict the output of the following code:
// =============> Write your prediction here

// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
        // The last digit of 42 is 3
        // The last digit of 105 is 3
        // The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
      //  Because every time we are passing the parameters we are actually 
      //  using the num value and return it.

// Finally, correct the code to fix the problem
// =============> write your new code here

          const num = 103;

          function getLastDigit(num) {
            return num.toString().slice(-1);
          }


          console.log(`The last digit of 42 is ${getLastDigit(42)}`);
          console.log(`The last digit of 105 is ${getLastDigit(105)}`);
          console.log(`The last digit of 806 is ${getLastDigit(806)}`);



// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
          // It was not working properly we were using the global variable 'num'
          // every time we called the function. 

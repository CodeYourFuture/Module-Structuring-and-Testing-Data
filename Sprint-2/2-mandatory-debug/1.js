// Predict and explain first...
//  =============> looking at it I think the sytntaks is worng return; a+b;

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> 
//   I declare in the scope of function what a,b need to do return  
// call the function with the template literal 
// wich will give me the Text sentence with the result of any sum 

// Finally, correct the code to fix the problem
//  =============> 

function sum(a, b) {
   const newSum = a + b;
   return newSum;
 
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// Predict and explain first...

/*It will print a error as return is in one line and Javasript will Not
read any code after that line


function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);*/

//FIX://

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

//The result wasn't returned because the sum of a and b wasn't included.
//Now I have fixed the code, and it is returning the result

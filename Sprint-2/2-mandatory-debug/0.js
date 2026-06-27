// Predict and explain first...

// =============> I predict the function will be called when the console try to print the sentence 'The result....'. In this case, two values 10 and 32 are inserted to this function. And a result will be calculated '10x32'. But I expected the function won't work exactly what people expect because I expect the result will be return instead of console print it to me. If I change this, I will expect the code works then.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> When I run this code, the sentence 'The result of multiplying 10 and 32 is undefined' comes to me. I think it is caused by the missed return statement and no value will be returned to this result in the sentence.

// Finally, correct the code to fix the problem
//  =============> function multiply(a, b) {
//  =============>   return a * b;
//  =============> }

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Predict and explain first...

/*
  the reason why is returning undefined is because as soon the function find the return
  will stop reading the rest. also the addition is ignoring because we have the statement 
  one line break after the return

  function sum(a, b) {
  return;
  a + b;
}

*/



//=================== this will work ==============

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

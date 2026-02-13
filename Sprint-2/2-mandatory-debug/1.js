  // Predict and explain first...
  //  =============> write your prediction here
  // I predict that the function will not return undefined.
  // This is due to the fact that the return statement is on its own line, therefore trying to do the addition will not work as the code is not read.

    function sum(a, b) {
      return;
      a + b;
    }

    console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

  // =============> write your explanation here
  // The return statement is written on its own line, therefore JS automatically inserts a semicolon after the return.
  // This means that the function exits immediately and returns undefined.
  // The expression a + b; is not executed.

  // Finally, correct the code to fix the problem
  //  =============> write your new code here
  function sum(a, b) {
    return a + b;
  }

  console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
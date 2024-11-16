function checkDivisibility(a, b) {
    if (a % b === 0) {
      return `${a} is divisible by ${b}`;
    }
  
    return `${a} is not divisible by ${b}`;
  }
  
  console.log(checkDivisibility(10, 2));
  console.log(checkDivisibility(50, 3));
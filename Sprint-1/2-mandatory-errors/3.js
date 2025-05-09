const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working 
// Before running the code, make and explain a prediction about why the code won't work - we don't have consele.log 
// Then run the code and see what error it gives. - TypeError: cardNumber.slice is not a function
// Consider: Why does it give this error? Is this what I predicted? If not, what's different? - so we don't have a function, we don't return any answer
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

  const cardNumber = 4533787178994213;

  function lastDigits(cardNumber) {
    const cardStr = cardNumber.toString(); // Convert the number to a string
    return cardStr.slice(-4); // Get the last 4 digits
  }
  
  console.log(`The last 4 digits are ${lastDigits(cardNumber)}`);


 
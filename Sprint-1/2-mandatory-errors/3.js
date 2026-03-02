const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value


//cardNumber is a number and slice does not work with numbers only strings
// to fix this we can convert the number to a string and then use slice 
// to get the last 4 characters of the string, which will be the last 4 digits of the original number
// const last4DigitsString = cardNumber.toString().slice(-4);
// or make it into a function that takes a number as an argument and returns the last 4 digits as a string

function last4Digits(cardNumber) 
  return `${cardNumber}`.slice(-4);    

console.log(last4Digits(cardNumber)); 

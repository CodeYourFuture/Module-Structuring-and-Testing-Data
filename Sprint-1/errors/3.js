// const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);

// the above code won't work because cardNumber is an integer whereas slice is a string method
// it gives Type error because of type compatability we ar giving integer as
// input for the string method Slice
// My prediction was wrong because I didn't check carefully and I thought we didn't
// console log the last4Digits variable so it may not show the output

//  correct way is below

const cardNumber = "4533787178994213";
const last4Digits = cardNumber.slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

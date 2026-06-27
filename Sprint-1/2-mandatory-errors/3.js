const cardNumber = 4533787178994213;
console.log(cardNumber.toString());
const cardNumber1 = cardNumber.toString()
const last4Digits = cardNumber1.slice(-4); 
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// I think slice () works for strings or arrays not for numbers. That's why the code won't work.
// Then run the code and see what error it gives.
// After running code TypeError: cardNumber.slice is not a function this error shows.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// It gives this error because cardNumber doesn't have slice method. My prediction was beacuse 
// cardNumber is number not string and the difference is that slice method called but it
// doesn't exist on that type.
// Then try updating the expression last4Digits is assigned to, in order to get the correct
// value
// Updated the expression in order to get in to the correct value.
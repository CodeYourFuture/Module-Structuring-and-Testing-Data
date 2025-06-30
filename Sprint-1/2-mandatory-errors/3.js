const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//slice() only works for string or Array,cardNumber is number so i predict that the computer will give TypeError. When i 
//run this Code, my prediction is right. In order to fix it, first cast to string first:

const cardNumber=4533787178994213;
const last4Digits = cardNumber.toString.slice(-4);

//then conver to number
const last4Digits = Number(cardNumber.toString.slice(-4));
console log(last4Digits);


const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);


// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
 

//fixed the code heres why it didnt worked.
// The error is that cardNumber is a number, and the slice method is a string method. We cannot use slice on a number. To fix this, we need to convert cardNumber to a string before using slice. We can do this by using the toString() method or by using template literals.
console.log(last4Digits);
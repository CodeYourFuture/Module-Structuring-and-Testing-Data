const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);
console.log(last4Digits);

// Because .slice() can't be used on numbers — it's a string/array method.
// TypeError: cardNumber.slice is not a function.
// Because cardNumber is a number, not a string or array.
// Convert the number to a string using .toString() before using .slice().
// 
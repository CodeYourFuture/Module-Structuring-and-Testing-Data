// Make a JavaScript file with a name that describes its contents.
//- Create a function with a descriptive name which makes it clear what the function does.
// The function should take one argument, the credit card number to validate.
//- Write at least 2 comments that explain to others what a line of code is meant to do.
//- Return a boolean from the function to indicate whether the credit card number is valid.

// function creditCardValidator(number)
// check number is number
// check number is 16 digits
// check at least two different numbers are included
// check the final digit is even.
// check the sum of numbers are greater than 16
// return boolean

export function creditCardValidator(number) {
  const lasDigit = number.slice(-1);

  if (lasDigit % 2 === 1) {
    return true;
  }
  if (number.length === 16) {
    return true;
  }

  const total = 0;
  for (const n of number) {
    total += n;
    if (total > 16) {
      return true;
    }
    return false;
  }
}

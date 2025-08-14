function cardNumberValidation(num) {
  // Check that the card number consists of 16 digits.
  if (!/^\d{16}$/.test(num)) {
    return false;
  }
  // Check that the card number has at least 2 different digits.
  if (/^(\d)\1{15}$/.test(num)) {
    return false;
  }
  //Check if the last digit of the card number is even.
  const lastDigit = Number(num[num.length - 1]);
  if (lastDigit % 2 !== 0) {
    return false;
  }
  // calculate the sum of all digits.
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + Number(num[i]);
  }

  if (sum <= 16) {
    return false;
  }
  return true;
}
console.log(cardNumberValidation("1234567891234569"));
console.log(cardNumberValidation("1234567891234562"));
console.log(cardNumberValidation("12345678912345"));
console.log(cardNumberValidation("1000000000000002"));

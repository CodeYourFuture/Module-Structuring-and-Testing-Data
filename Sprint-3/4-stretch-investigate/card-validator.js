 
const isValidateCard = (number) => {
  // Convert input to string for easier processing
  const toStr = String(number);

  // Rule 1: Must be 16 digits, all numbers
  //here .length can check the if the given number is 16 digits
  if(toStr.length !== 16) 
            return "not 16 digits"
        //using regular expression we can check if the given string is a number by using \d(any digit from (0-9)),+ to imply that one or more
        if(!/^\d+$/.test(toStr)) 
            return "invalid characters"

  // Rule 2: Must contain at least 2 different digits
   // new Set(string).size gives a non duplicated size of a given string
  if (new Set(toStr).size < 2) {
    return "no at least two different digits";
  }

  // Rule 3: Last digit must be even
  if (parseInt(toStr[15], 10) % 2 !== 0) {
    return "odd final number";
  }

  // Rule 4: Sum of all digits must be greater than 16
  //in order to change the string to an array I used split("") and the reduce will give the sum of each element in the array
  const sum = toStr
    .split('')
    .reduce((total, digit) => total + Number(digit), 0);

  if (sum <= 16) {
    return "sum less than 16";
  }

  return true;
};

console.log(isValidateCard(9999777788880000))
console.log(isValidateCard(6666666666661666))
console.log(isValidateCard("a92332119c011112"))
console.log(isValidateCard(4444444444444444))
console.log(isValidateCard(6666666666666661))
console.log(isValidateCard(1111111111111110))
// Predict and explain first...

/*
    - If we run this code. nothing will happen because the function is not called.

    -once we invoke the function this will take the number and converted into string to manipulate and  take the las digit and return the new string 42  => will return 2.

      const num = 103;

      function getLastDigit() {
        return num.toString().slice(-1);
      }
*/

//=========== This will  work ==============
// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem


const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(num)}`);
console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);



//=========== finding the middle digit ==============
// Index:  0  1  2  3  4  5  6  7  8  9 10 11 12
// Value:  2  0  5  5  5  6  4  2  3  2  5  6  9

function getMiddleDigit(num) {
  const str = num.toString();
  // console.log(str);

  const middleIndex = Math.floor(str.length / 2); // 13/2 = 6.5 math.floor round the number to the nearest integer 6.
  // console.log(middleIndex);

  return str[middleIndex]; //we can access to the position 6 which contains the value '4'
}

console.log(`The middle of 105 is ${getMiddleDigit(2055564232569)}`)
function getOrdinalNumber(num) {
// This is for num argument validation that go inside the function.
if(typeof num !== "number" || Number.isNaN(num)){
  throw new Error ("Invalid input: the value must be a number");
}

// This allow float number to be round into it nearest integer.
num = Math.round(num);

 if(num % 100 === 11 ||num % 100 === 12 || num % 100 === 13 ){
  return `${num}th`;
 }
switch( true ){
  case num % 10 === 1 : return `${num}st`;
  case num % 10 === 2 : return `${num}nd`;
  case num % 10 === 3 : return `${num}rd`;
  default : return `${num}th`;
}
}

module.exports = getOrdinalNumber;


function testAssert (inputNumber,outputNUmber){
console.assert(
 inputNumber === outputNUmber,
 `Test failed: expected ${outputNUmber}, but got ${inputNumber}`
);
};
//Basic test of first digit integer
testAssert(getOrdinalNumber(1), "1st");
testAssert(getOrdinalNumber(2), "2nd");
testAssert(getOrdinalNumber(3), "3rd");
testAssert(getOrdinalNumber(4), "4th");
//Test for 11, 12 and 13 
testAssert(getOrdinalNumber(11), "11th");
testAssert(getOrdinalNumber(12), "12th");
testAssert(getOrdinalNumber(13), "13th");
//Test for double digit number
testAssert(getOrdinalNumber(21), "21st");
testAssert(getOrdinalNumber(32), "32nd");
testAssert(getOrdinalNumber(43), "43rd");
//Normal number and float number test.
testAssert(getOrdinalNumber(101), "101st");
testAssert(getOrdinalNumber(202), "202nd");
testAssert(getOrdinalNumber(1.2), "1st");   
testAssert(getOrdinalNumber(10.51), "11th"); 




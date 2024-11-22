// You wil need to implement a function isProperFraction
// You need to write assertions for your function to check it works in different cases

// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator

// Acceptance criteria:

// Proper Fraction check:
// Input: numerator = 2, denominator = 3
// target output: true
// Explanation: The fraction 2/3 is a proper fraction, where the numerator is less than the denominator. The function should return true.

// Improper Fraction check:
// Input: numerator = 5, denominator = 2
// target output: false
// Explanation: The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.

// Zero Denominator check:
// Input: numerator = 3, denominator = 0
// No target output: Error (Denominator cannot be zero)
// Explanation: The function should throw an error when the denominator is zero, as it's not a valid fraction.

// Negative Fraction check:
// Input: numerator = -4, denominator = 7
// target output: true
// Explanation: The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
// These acceptance criteria cover a range of scenarios to ensure that the isProperFraction function handles both proper and improper fractions correctly and handles potential errors such as a zero denominator.

function isProperFraction(numerator, denominator) {
    if(numerator < denominator  ){
        return true
    }else if(numerator > denominator ){
        return false
    }else if(numerator > 0 && denominator == 0){
        return "Error (Denominator cannot be zero)"
    } else if(numerator < 0 && denominator > 0){
        return true
    } else if( numerator === denominator ){
        return false
    }
}

//test1
const numerator1 = 2;
const denominator1 = 3;
const output1 = isProperFraction(numerator1, denominator1);
const expectedOutput1 = true;
console.assert( output1 === expectedOutput1, "expecting true") //passed

//test2
const numerator2 = 3;
const denominator2 = 2;
const output2 = isProperFraction(numerator2, denominator2);
const expectedOutput2 = false;
console.assert(output2 === expectedOutput2, "expecting false" ) //passed

//test3
const numerator3 = 10;
const denominator3 = 0;
const output3 = isProperFraction(numerator3, denominator3);
const expectedOutput3 = "Error (Denominator cannot be zero)"
console.assert( output3 === expectedOutput3, "expecting : Error (Denominator cannot be zero)") //failed

//test4
const numerator4 = -3;
const denominator4 = 4;
const output4 = isProperFraction(numerator4, denominator4);
const expectedOutput4 = true;
console.assert( numerator4 === denominator4, "expecting: true") //failed

//test5
const numerator5 = 5;
const denominator5 = 5;
const output5 = isProperFraction(numerator5, denominator5);
const expectedOutput5 = false;
console.assert( output5===expectedOutput5,"expecting false") //passed
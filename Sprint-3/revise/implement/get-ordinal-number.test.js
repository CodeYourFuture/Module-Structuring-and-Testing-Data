// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(input){
    const lastDigit = input % 10;
    const lastTwoDigits = input % 100;
 if(lastTwoDigits ===11 || lastTwoDigits === 12 || lastTwoDigits===13){
    return `${input}th`
 }
 if(lastDigit === 1){
    return `${input}st`
 }else if(lastDigit ===2){
    return `${input}nd`
 }else if(lastDigit ===3){
    return `${input}rd`
 }
 else return`${input}th`
}

console.log(getOrdinalNumber(1))
console.log(getOrdinalNumber(11))
console.log(getOrdinalNumber(21))
console.log(getOrdinalNumber(2))
console.log(getOrdinalNumber(12))
console.log(getOrdinalNumber(22))
console.log(getOrdinalNumber(3))
console.log(getOrdinalNumber(13))
console.log(getOrdinalNumber(33))
console.log(getOrdinalNumber(211))

const input1 = 11;
const output1 = getOrdinalNumber(input1);
const expectedOutput1 = '11th'
console.assert(output1 === expectedOutput1, 'expecting 11 to be 11th') //passed

const input2 = 112;
const output2 = getOrdinalNumber(input2);
const expectedOutput2 = '112th'
console.assert(output2 === expectedOutput2, 'expecting 112 to be 112th') //passed

const input3 = 113;
const output3 = getOrdinalNumber(input3);
const expectedOutput3 = "113th";
console.assert(output3 === expectedOutput3 , "expecting 113 to be 113th") //passed

test('expecting 113 to be 113th', () => {
    expect(getOrdinalNumber(113)).toBe("113th")
}) //passed

test('expecting 28 to be 28th', () => {
    expect(getOrdinalNumber(28)).toBe("28th")
})

function getOrdinalNumber(num) {

let twoDigitNum = num % 10; 
let threeDigitNum = num % 100;

if (twoDigitNum === 1 && threeDigitNum !== 11) return  (`${num}st`);
else if (twoDigitNum === 2 && threeDigitNum !== 12) return  (`${num}nd`);
else if (twoDigitNum === 3 && threeDigitNum !== 13) return  (`${num}rd`);
else return (`${num}th`);
}


module.exports = getOrdinalNumber;






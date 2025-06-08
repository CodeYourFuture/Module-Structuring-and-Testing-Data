
const isValidCard = cardNum => {

   let containsOnlyDigits = /^\d+$/.test(cardNum);
   let contain16Digits = cardNum.length === 16;
   let hasTwoDifferentDigits = !/^(\d)\1*$/.test(cardNum);
   let hasEvenFinalDigits = cardNum.slice(-2) % 2 === 0
   let cardSum = [...cardNum].reduce((total,currentNum)=> total + Number(currentNum),0);
   let sumIsBigEnough = cardSum > 16

   return containsOnlyDigits && contain16Digits && hasTwoDifferentDigits && hasEvenFinalDigits && sumIsBigEnough 

}

console.log(isValidCard("6666666666666661"));
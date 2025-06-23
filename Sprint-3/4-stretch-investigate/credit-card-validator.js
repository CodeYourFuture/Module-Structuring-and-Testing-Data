function cardValidator(numCard){
let validCard = true;
//- Number must be 16 digits, all of them must be numbers.
validCard = validCard && (numCard.toString().length === 16);
validCard = validCard && Number.isInteger(numCard);
//- Must have at least two different digits represented (all of the digits cannot be the same).
    let Num;
    let sameNum;
    for (let i = 0 ; i < numCard.toString().length; i++){
         if (i === 0 ){
            Num = numCard.toString()[i];
        }else if ((Num !== numCard.toString()[i])){
            sameNum = false;
            i = numCard.toString().length;
        } else {
            sameNum = true;
        }
        Num = numCard.toString()[i];
    }
validCard = validCard && !sameNum
//- The final digit must be even.
let lastEven = (numCard.toString().slice(-1) % 2 === 0);
validCard = validCard && lastEven; 
//- The sum of all the digits must be greater than 16.
    let sumDigits = 0;
    for (let i = 0 ; i < numCard.toString().length; i++){
        sumDigits = sumDigits + numCard.toString().slice(i,i+1)*1;
    }
validCard = validCard && (sumDigits > 16);
return validCard;
}
 module.exports = cardValidator;

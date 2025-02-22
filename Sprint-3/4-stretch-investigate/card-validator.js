function validateCard(cardNumber){
    const errorMessage =
      "INVALID CARD NUMBER! must be 16 digits number, with at least two different digits represented, final digit must be even, sum of all the digits must be greater than 16.";
    if (!isNaN(cardNumber) && cardNumber.length === 16) {
        if (cardNumber[0].repeat(16) !== cardNumber) {
            if (cardNumber % 2 ===0){
                let sum = 0;
                for (let i=0; i<16; i++){
                    sum += cardNumber[i]
                }
                if (sum > 16) return "Correct card number";
                else return `${errorMessage}`
            }
            else return `${errorMessage}`;
        }
        else return `${errorMessage}`;
    }

    else return `${errorMessage}`;
}
module.exports = validateCard;

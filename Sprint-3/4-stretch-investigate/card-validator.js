function cardValidator(card) {
  if (card.length !== 16) {
    return false;
  }

  if (/\D/.test(card)) {
    return false;
  }

  let lastDigit = parseInt(card.charAt(card.length - 1));
  let sum = 0;
  for (let num of card) {
    sum += parseInt(num);
  }

  return sum >= 16 && lastDigit % 2 === 0;
}

console.log(cardValidator("1225252252251248"));
module.exports = cardValidator;

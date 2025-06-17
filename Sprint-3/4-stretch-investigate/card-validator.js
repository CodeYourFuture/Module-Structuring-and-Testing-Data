function isCardValid(card_number) {
  card_number = String(card_number); // convert the card number into string to make possible to use function parseInt()
  let sum_card_number_digits = 0;
  for (let i = 0; i < card_number.length; i++) {
    // use an index to find every digit in the card number
    sum_card_number_digits += parseInt(card_number[i]);
  }
  let last_digit_even = parseInt(card_number[15]) % 2 === 0;

  let card_number_16_digits = /^\d{16}$/.test(card_number); // use regex(regular expression) to check if the card number is a 16 length digit number

  function unique_card_digit(card_number) {
    // comparison first digit the card number with next digits in the card number consistently
    const first_digit = card_number[0]; // in order to have a true output if at least 2 digits in the card number are different
    for (let i = 1; i < card_number.length; i++) {
      if (first_digit !== card_number[i]) {
        return true;
      }
    }
    return false;
  }

  if (
    last_digit_even &&
    card_number_16_digits &&
    sum_card_number_digits > 16 &&
    unique_card_digit(card_number)
  ) {
    console.log("Card is valid");
    return true;
  } else {
    console.log("Card is not valid!");
    return false;
  }
}
//console.log(isCardValid(456887078087675m));

module.exports = isCardValid;

function isCardValid(card_number) {
  card_number = String(card_number);
  let sum_card_number_digits = 0;
  for (let i = 0; i < card_number.length; i++) {
    sum_card_number_digits += parseInt(card_number[i]);
  }
  let last_digit_even = parseInt(card_number[15]) % 2 === 0;

  let card_number_16_digits = /^\d{16}$/.test(card_number);

  function unique_card_digit(card_number) {
    const first_digit = card_number[0];
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
console.log(isCardValid(456887078087675m));

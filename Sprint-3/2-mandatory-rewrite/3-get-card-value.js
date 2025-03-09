function getCardValue(card) {
    if (typeof card !== 'string' || card.length < 1) {
      return 0; // Or throw an error, depending on desired behavior for invalid cards.
    }
  
    const value = card[0];
  
    if (value === 'A') {
      return 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      return 10;
    } else if (['2', '3', '4', '5', '6', '7', '8', '9', '10'].includes(value)) {
      if(value === '1' && card[1] === '0'){
          return 10;
      }
      return parseInt(value);
    } else {
      return 0; // Or throw an error, depending on desired behavior for invalid cards.
    }
  }
  
  module.exports = getCardValue;
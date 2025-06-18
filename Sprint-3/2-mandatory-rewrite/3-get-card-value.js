function getCardValue(card) {
  
    card = card.replaceAll(" ", ""); // removes any extra spaces added in card string

    if (card.length != 2) {
    throw new Error("Invalid card entered");
  }

  //get rank and suit from card string
  const rank = card.slice(0,-1);
  const suit = card.slice(1);


  // make array of number ranks only 0,1,..,10
  const numberRanks = [...Array.from({length:11}, (_,i) => i.toString())];

  // make array of all existing ranks, numbers and face cards 
  const allRanks = [...numberRanks,"A","J","Q","K"];


  if (["♠","♥","♦","♣"].includes(suit) && allRanks.includes(rank)) {

    //if the rank is a number, that is its value so just return that
      if (numberRanks.includes(rank)) {return Number(rank)};

    // if rank is Ace, then return 11
    if (rank === 'A') {return 11};

    // otherwise, rank is J Q or K, so return 10
    return 10;
  }

  else {throw new Error("Invalid card entered");}
}


module.exports = getCardValue;
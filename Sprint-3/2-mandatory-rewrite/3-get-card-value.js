function getCardValue(card) {
    // replace with your code from key-implement
        let rank = card.slice(0,-1);
          if (rank === "A") return 11;
          if (rank === "10" || rank === "j" || rank === "Q" || rank === "K") return 10;
          if (rank >2 && rank <=9) return Number(rank);
          else throw new Error ("Invalid card rank");
      }

module.exports = getCardValue;
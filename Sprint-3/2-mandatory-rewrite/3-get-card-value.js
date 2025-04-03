function getCardValue(card) {
    // replace with your code from key-implement
        let rank = card.slice(0,-1);
          if (rank === "A") return 11;
          if (rank === "10" || rank === "j" || rank === "Q" || rank === "K") return 10;
          if (["2", "3", "4", "5", "6", "7", "8", "9"].includes(rank)) return Number(rank);
          else throw new Error ("Invalid card rank");
      }

module.exports = getCardValue;
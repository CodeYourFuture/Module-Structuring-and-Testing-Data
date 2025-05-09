
    // replace with your code from key-implement
    
    function getCardValue(card) {
        const rank = card.slice(0, -1);
          if (rank === "A") return 11;
          if (["J", "Q", "K", "10"].includes(rank)) return 10;
          if (/^[2-9]$/.test(rank)) return Number(rank);
         throw new Error("Invalid")
        }


module.exports = getCardValue;
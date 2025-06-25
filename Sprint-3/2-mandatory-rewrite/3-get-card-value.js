function getCardValue(card) {
    // replace with your code from key-implement
    const rank = card.slice(0, -1); // works to extract the rank and ignores the suit
        if (rank === "A") return 11 //works
        else if (["J", "Q", "K", "10"].includes(rank)) 
            {return 10} // doesnt work
        else if (/^[2-9]$/.test(rank)) {
            return Number(rank)} // this resturns a string not a number and therefore fails.10 doesnt need to be here it can be in line 5. this doesnt work, refactor.
        else { throw new Error("Invalid card rank.");} // this is right but doesnt work as expected
}
module.exports = getCardValue;
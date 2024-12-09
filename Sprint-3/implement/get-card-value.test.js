function getCardValue (card) {
    const rank = card.slice(0,-1);

    if (rank === "A") {
        return 11;
    } else if (["J", "K", "Q", "10"].includes(rank)){
        return 10;
    } else if(+rank >= 2 && +rank <= 9) {
       return +rank; 
    } else {
        return "Invalid card rank"
    }
   
}

test("returns 11 for Ace", function() {
    expect(getCardValue("A♠")).toBe(11)

} );

test("returns 10 for face cards (J, Q, K)", function() {
        expect(getCardValue("J♠")).toBe(10);
        expect(getCardValue("Q♥")).toBe(10);
        expect(getCardValue("K♦")).toBe(10);
    });

test("returns the numeric value for number cards (2-10)", function () {
        expect(getCardValue("2♠")).toBe(2);
        expect(getCardValue("10♥")).toBe(10);
        expect(getCardValue("7♦")).toBe(7);
    });
test("throws error for invalid card ranks", function(){
        expect(getCardValue("X♠")).toBe("Invalid card rank");
        expect(getCardValue("11♣")).toBe("Invalid card rank");
        expect(getCardValue("#♦")).toBe("Invalid card rank");
    
})    

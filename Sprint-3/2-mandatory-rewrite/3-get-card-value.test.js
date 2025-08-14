const getCardValue = require("./3-get-card-value");



// Case 2: Handle Number Cards (2-10):
test("should return number for number cards (2-10)",() => {
    expect(getCardValue("2♠")).toEqual (2);
    expect(getCardValue("10♣")).toEqual(10);
});
// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for face cards J, Q, K", () => {
    ["J", "Q", "K"].forEach(rank => {
    expect(getCardValue (`${rank}♦`)).toEqual(10);
    });
});


    
// Case 4: Handle Ace (A):
test("should return 11 for Ace", () => {
    expect(getCardValue("A♦")).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should throw error for invalid card rank", () => {
    expect(() => getCardValue("L")).toThrow(new Error("Invalid card rank"));
});

// Case 6: should throw error for invalid numeric format:  
test("should throw error for invalid numeric format", () => {
    expect(() => getCardValue("0x02♠")).toThrow("Invalid card rank");
    expect(() => getCardValue("2.1♠")).toThrow("Invalid card rank");  
    expect(() => getCardValue("2♠♠")).toThrow("Invalid card rank");
});
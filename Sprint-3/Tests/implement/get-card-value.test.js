/* Testing criteria - returning a numerical value for card inputs of different types
The card input will consist of a letter (JKQA), a number (2-10) and an emoji to represent suit (♠♥♦♣)
If the input is not a string, an error must be thrown.
When this card string is entered, it must return a numeric value.Cards with inputs between "2-9" should return numeric equivalent.
The cards "10 J Q K" should return the value of 10.
The card with input "A" should return a default value of 11.
When no suit emoji has been entered, it must return "Please enter a card suit emoji"
All other inputs should throw error "Invalid card rank"
♠♥♦♣
*/

const {getCardValue} = require ('../../implement/get-card-value');
describe("getCardValue function", () => {
//Invalid cases

test("should throw error when input is not a string, a recognised card number or face card", () => {
    expect(() =>getCardValue(23456789)).toThrow("Invalid card rank or card suit");
    expect(() =>getCardValue("11♠")).toThrow("Invalid card rank or card suit"); //must be numbers 2-10
    expect(() =>getCardValue("-2♦")).toThrow("Invalid card rank or card suit"); //must be positive number
    expect(() =>getCardValue("P♥")).toThrow("Invalid card rank or card suit"); //must be valid face card
    expect(() =>getCardValue("J💔")).toThrow("Invalid card rank or card suit"); //must be valid emoji suit
    expect(() =>getCardValue(null)).toThrow("Invalid card rank or card suit"); //must have an entry
    expect(() =>getCardValue(undefined)).toThrow("Invalid card rank or card suit"); //must be a defined entry

});

//Error case for when no suit emoji is entered
test("should return 'Invalid card rank or card suit' when there are less than 2 characters", () => {
    expect(() =>getCardValue("4")).toThrow("Invalid card rank or card suit");
});


//Typical cases
test("should return numerical '5' when string 5 and emoji suit is input", () => {
    expect(getCardValue("5♣")).toBe(5);
});

test("should return '10' when card input is 10, J, Q, K", () => {
    expect(getCardValue("J♠")).toBe(10);
    expect(getCardValue("10♦")).toBe(10);
    expect(getCardValue("Q♥")).toBe(10);
    expect(getCardValue("K♣")).toBe(10);
    expect(getCardValue("10♠")).toBe(10);
});

test("should return '11' when card input is A", () => {
    expect(getCardValue("A♥")).toBe(11);
})

});
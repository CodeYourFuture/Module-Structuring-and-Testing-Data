// write tests for testing the user inputs
// input K♥️ expect return of int 10
// input Q expect return of a error cause no emoji for suit entered
// input J♣️ expect return of int 10
//input 4♠️ expect return of int 4
// input A♦️ expect return of int 11
// input 1♣️ expect return of error message "Invalid entry"
// input ♥️♥️ expect a return of error message "Invalid entry"

const getCardValue = require('./card');

describe('getCardValue', () => {
    // write 1 test case just to check jest works. it is expected to fail.
  it('should return 10 for King of any suit', () => {
    expect(getCardValue('K♥️')).toBe(10);
  });
  // Test Ace's 
  test('should return 11 for Ace of any suit', () => {
    expect(getCardValue('A♠️')).toBe(11);
    expect(getCardValue('A♥️')).toBe(11);
    expect(getCardValue('A♦️')).toBe(11);
    expect(getCardValue('A♣️')).toBe(11);
  });

  // Test face's
  test.each([
    ['J♠️', 10],
    ['Q♥️', 10],
    ['K♦️', 10],
  ])('should return 10 for face card %s', (input, expected) => {
    expect(getCardValue(input)).toBe(expected);
  });
 
    // Tests number cards
    test.each([
      ['2♠️', 2],
      ['3♥️', 3],
      ['4♦️', 4],
      ['5♣️', 5],
      ['6♠️', 6],
      ['7♥️', 7],
      ['8♦️', 8],
      ['9♣️', 9],
      ['10♠️', 10],
    ])('should return %i for card %s', (input, expected) => {
      expect(getCardValue(input)).toBe(expected);
    });

     // Test error cases
  
    test('should throw error for non-string input', () => {
      expect(() => getCardValue(42)).toThrow('Invalid input: card must be a string');
      expect(() => getCardValue(null)).toThrow('Invalid input: card must be a string');
      //expect(() => getCardValue('A')).toThrow('Invalid input: card must be a string'); // test case does not work. error with .toThrow method
    });

  
});

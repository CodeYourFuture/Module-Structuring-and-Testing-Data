const getCardValue = require('./get-card-value')

test('getCardValue returns 11 for Ace', () => {
    expect(getCardValue('A♠')).toBe(11);
  });


test('getCardValue returns 10 for J, Q or K', () => {
    expect(getCardValue('J♠')).toBe(10);
    expect(getCardValue('Q♠')).toBe(10);
    expect(getCardValue('K♠')).toBe(10);
  });


test('getCardValue returns parseInt(rank) for 2 & 9', () => {
  expect(getCardValue('2')).toBe(parseInt('2'));
  expect(getCardValue('9')).toBe(parseInt('9'));
});

test('getCardValue throws error for invalid rank', () => {
  expect(() => getCardValue('A♠♠')).toThrow('Invalid card rank.');
  expect(() => getCardValue('Q$')).toThrow('Invalid card rank.');
  expect(() => getCardValue('K&')).toThrow('Invalid card rank.');
  
    
});

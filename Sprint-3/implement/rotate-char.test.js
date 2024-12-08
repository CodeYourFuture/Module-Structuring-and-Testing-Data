const rotateCharacter = require('./rotate-char');

test('rotates a lowercase letter by the given shift', () => {
  expect(rotateCharacter('a', 3)).toBe('d');
});

test('rotates a lowercase letter with negative shift', () => {
  expect(rotateCharacter('d', -3)).toBe('a');
});

test('rotates an uppercase letter by the given shift', () => {
  expect(rotateCharacter('A', 3)).toBe('D');
});

test('rotates an uppercase letter with negative shift', () => {
  expect(rotateCharacter('D', -3)).toBe('A');
});

 
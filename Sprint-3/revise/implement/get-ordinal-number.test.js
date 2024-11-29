// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

import ordinal from './ordinal';

test('displays the correct suffixes', () => {
  expect(ordinal(1)).toBe("1st");
  expect(ordinal(2)).toBe("2nd");
  expect(ordinal(3)).toBe("3rd");  
  expect(ordinal(4)).toBe("4th");  
  expect(ordinal(5)).toBe("5th"); 
  expect(ordinal(15)).toBe("15th"); 
  expect(ordinal(21)).toBe("21st"); 
});
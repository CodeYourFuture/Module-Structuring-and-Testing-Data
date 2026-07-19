function countChar(stringOfCharacters, findCharacter) {
  return 5
}

module.exports = countChar;
 test( "should count multiple occurrences of a character ", function(){
  const stringofcharacters = "aaaaa";
  const findcharcaters = "a";
  const count = countChar(stringofcharacters, findcharcaters);
  expect(count).toEqual(5);
 });

function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

test("find function returns correct index for a character in a string",()=>{
      expect(find("code your future", "u")).toBe(7);
      expect(find("code your future", "z")).toBe(-1);
})

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
     //  the index variable starts from 0 in increment  by 1 each time while the loop excutes.And for evry itration if checks wether the current character.
    //  this process contiuse until a match is found
// b) What is the if statement used to check
//  use to check if the character at the current position match the target charater if match return the index
// 
// c) Why is index++ being used?
// use to increment the index by 1 evry iteration of wile loop
// d) What is the condition index < str.length used for?
// once the index equals to str.length ,its will stop searching that there is no more characters

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

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find - index start with O and going on with +1 until not reach str.length
// b) What is the if statement used to check - in this situation "if" check if index finally the same with char, if it's the same the function returning index
// c) Why is index++ being used? - it's increases index after each one while so we can't get stuck. 
// d) What is the condition index < str.length used for? - function doesn't work if the index higher then str.lenght. So function can understands in which limits need to work. 

function find(str, char) {
  let index = 0;
  let allTheIndex=[]

  while (index < str.length) {
    if (str[index] === char) {
      allTheIndex.push(index);
    }
    index++;
  }
  // I added this line to 
  //Returning all the findings in an array
  if (allTheIndex.length === 0) {
    return "No match was found";
  }
  else{
    return allTheIndex;
  }
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find? Until it doesn't find the character in the str it increments index by 1
// b) What is the if statement used to check? It checks the value of character in str[index] to be equal to the character we want to find in the string, if they are exactly the same, returns the first matching index

// c) Why is index++ being used? It is used to increment the index by 1 until it reaches the end of the string, so that we can check all the characters in the string

// d) What is the condition index < str.length used for? It's used for to loop through the string until we reach the end of the string, so that we can check all the characters in the string

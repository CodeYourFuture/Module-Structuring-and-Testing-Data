// Implement a function repeat

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.

function repeatString(str, count) {
  let newWords = "";
  //if count is greater than 1 if so repeat string count times
  //else if count is 1 return the string
  //else if count is 0 return empty string
  //else if count is negative return error
    if (count > 1) {
    for (let i = 0; i < count; i++) {
      newWords += str + " ";
    }
    return newWords.trimEnd();
  }
  // Si count === 1, retorna el string original
  else if (count === 1) {
    return str;
  }
  // Si count === 0, retorna una cadena vacía
  else if (count === 0) {
    return "";
  }
  // Si count < 0, retorna un mensaje de error
  else if (count < 0) {
    return "error your number is negative";
  }
}

module.exports = repeatString;
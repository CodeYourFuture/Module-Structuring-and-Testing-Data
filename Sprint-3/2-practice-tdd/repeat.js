function repeat(valueToRepeat, numOfTimes) {
  let repeatedValue = "";
  if (numOfTimes > 0) {
    for (let i = 0; i < numOfTimes; i++) {
      repeatedValue += valueToRepeat;
    }
  } else if (numOfTimes === 0) {
    repeatedValue = "";
  } 
  else {
    repeatedValue = "Negative number invalid";
  }
  return repeatedValue;
}

module.exports = repeat;

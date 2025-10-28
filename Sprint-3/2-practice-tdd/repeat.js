function repeat(valueToRepeat, numOfTimes) {
  let repeatedValue = "";
  if (numOfTimes > 0 && Number.isInteger(numOfTimes)) {
    for (let i = 0; i < numOfTimes; i++) {
      repeatedValue += valueToRepeat;
    }
  } else if (numOfTimes === 0) {
    repeatedValue = "";
  } else if(numOfTimes < 0) {
    repeatedValue = "Negative number invalid";
  } else if(!Number.isInteger(numOfTimes)) {
    repeatedValue = "Invalid count: count should be an integer"
  }
  return repeatedValue;
}

module.exports = repeat;

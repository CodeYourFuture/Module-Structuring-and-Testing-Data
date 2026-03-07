function repeatStr(stringToRepeat, numberOfRepetitions) {
  // Handle count of 0
  if (numberOfRepetitions === 0) {
    return "";
  }

  // Handle count of 1
  if (numberOfRepetitions === 1) {
    return stringToRepeat;
  }

  // Handle multiple repetitions (> than 1)
  if (numberOfRepetitions > 1) {
    let finalString = "";

    // loop for repeating the string and concatenating it to the final string
    for (let repetition = 0; repetition < numberOfRepetitions; repetition++) {
      finalString = finalString + stringToRepeat;
    }

    return finalString;
  }
}

module.exports = repeatStr;

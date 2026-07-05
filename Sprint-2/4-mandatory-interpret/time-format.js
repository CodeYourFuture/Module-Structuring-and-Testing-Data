function pad(num) {
  let numString = num.toString();
  while (numString.length < 2) {
    numString = "0" + numString;
  }
  return numString;
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// a) pad is called 3 times per call to formatTimeDisplay (once for hours, minutes, seconds).

// Call formatTimeDisplay(61):
//   remainingSeconds = 61 % 60 = 1
//   totalMinutes = (61 - 1) / 60 = 1
//   remainingMinutes = 1 % 60 = 1
//   totalHours = (1 - 1) / 60 = 0
//   pad is called with: totalHours=0, remainingMinutes=1, remainingSeconds=1

// b) num = 0 (totalHours) when pad is called for the first time.

// c) pad(0): "0".length < 2, so prepend "0" -> "00". Return value: "00"

// d) num = 1 (remainingSeconds) when pad is called for the last time.
//    It is the last argument passed in the template literal.

// e) pad(1): "1".length < 2, so prepend "0" -> "01". Return value: "01"

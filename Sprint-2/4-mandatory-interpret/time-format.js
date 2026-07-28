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

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> pad is called zero time.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> when pad is called the first time, num is 0.

// c) What is the return value of pad is called for the first time?
// =============> The return value of pad is "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The value of num when pad is called the last time is 1. This is because the last call to pad() is pad(remainingSeconds) and formatTimeDisplay(61) calculates remainingSeconds as 1 (61 % 60 = 1), the value passed into pad() as num is 1.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> pad returns "01" when it is called the last time. This is because the function pad add a "0" in front of num as long as it is lesser than 2. And it comes from pad(remainingSeconds) which is (61 %60 = 1);

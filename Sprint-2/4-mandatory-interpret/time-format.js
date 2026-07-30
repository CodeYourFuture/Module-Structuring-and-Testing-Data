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
// =============> 3 times

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0

// c) What is the return value of pad when it is called for the first time?
// =============> "00"

// d) What is the value assigned to num when pad is called for the last time in this program? Explain your answer
// =============> 1, because formatTimeDisplay(61) has 1 remaining second,
// and the last call to pad is pad(remainingSeconds).

// e) What is the return value of pad when it is called for the last time in this program? Explain your answer
// =============> "01", because pad adds a zero to the beginning of "1"
// to make it two characters long.
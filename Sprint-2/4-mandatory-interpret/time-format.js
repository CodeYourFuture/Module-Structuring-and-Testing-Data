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

// You will need to play computer with this example - use the Python Visualiser https://
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// ==============> pad will be called 3 times - once for totalHours, once for remainingMinutes, once for remainingSeconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// ==============> num is 0 (totalHours is called first, and its value is 0).

// c) What is the return value of pad is called for the first time?
// ==============> "00" (0 padded with a leading zero to make it 2 characters long).

// d) What is the value assigned to num when pad is called for the last time in this program?
// ==============> num is 1 (remainingSeconds is called last, and its value is 1).

// e) What is the return value of pad when it is called for the last time in this program?
// ==============> "01" (1 padded with a leading zero).

console.log(formatTimeDisplay(61));

